import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Documento } from 'src/app/models/documento.model';
import { DocumentoService } from 'src/app/services/documento/documento.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-gestionar-docs',
  templateUrl: './gestionar-docs.component.html',
  styleUrls: ['./gestionar-docs.component.scss']
})
export class GestionarDocsComponent implements OnInit {

  categorias = [
    'Recibos',
    'Documento',
    'Otros'
  ]
  filtro;
  file;
  documento: Documento[];
  formFile: FormGroup;
  @ViewChild('content') modal;

  constructor(
    private docService: DocumentoService,
    private fb: FormBuilder,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.docService.listar().subscribe(data => {
      this.documento = data.data;
    })

    this.formFile = this.fb.group({
      nombre: ['', Validators.required],
      resumen: ['', Validators.required],
      categoria: ['', Validators.required]
    })

  }

  handleFile(event) {
    this.file = event;
    console.log(this.file[0])

  }

  onSubmit() {

    if (this.file == null) {
      swal('Error', 'Seleccione un archivo', 'warning')
      return;
    }

    if (this.formFile.invalid) {
      swal('Error', 'Llene los datos!', 'warning')
      return;
    }
    var vDatos = this.formFile.value;

    const reader = new FileReader();

    reader.readAsDataURL(this.file[0]);

    reader.onload = () => {
      let query = {
        file: reader.result,
        documento: {
          nombre: vDatos.nombre,
          resumen: vDatos.resumen,
          filePath: '',
          categoria: vDatos.categoria
        },
        nameFile: this.file[0].name
      }
      this.docService.insertar(query).subscribe(res => {
        this.docService.listar().subscribe(data => {
          this.documento = data.data;
          this.formFile.reset();
        })
      })
    }
  }

  descargar(filePath) {
    this.docService.descargar(filePath);
  }

  abrirModal() {
    this.modalService.open(this.modal);
  }
}
