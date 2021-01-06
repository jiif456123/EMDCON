import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Pago } from '../../models/pago.model';
import { PagoService } from '../../services/pago/pago.service';
import swal from 'sweetalert2';
//declare function init_plugins();
interface HtmlInputEvent extends Event{
  target : HTMLInputElement & EventTarget;
}

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

export class RegistroComponent implements OnInit {
  public imgSelect: String | ArrayBuffer;
  id: string;
  editar: boolean;
  pago: Pago;
  pagoRegistrar: Pago;
  formPago: FormGroup;
  pagos: Pago[];
  filtro;
  file;
  fileAct;
  objPago: Pago = null;
  nombreAux: boolean;
  fechapagoAux: boolean;
  ctaAux: boolean;
  estadoAux: boolean;
  montoAux: boolean;
  fotoAux: boolean;
  formFile: FormGroup;
  constructor(
    private pagoService : PagoService,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    //init_plugins();
    //Inicializar el arreglo: []
    this.pagos = [];
    console.log(this.pagos)
    this.pagoService.listar().subscribe(data => {
      this.pagos = data.data;
      console.log(data.data)
    })

    this.formPago = new FormGroup({
      '_id': new FormControl(''),
      'nombre': new FormControl('', Validators.required),
      'fechapago': new FormControl('', Validators.required),
      'cta': new FormControl('', Validators.required),
      'monto': new FormControl('', Validators.required),
      'estado': new FormControl('0', Validators.required),
    });

    this.activateRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editar = params['id'] != null;
      this.cargarFormulario();
    })

  }

  public invalid(field: any) {
    return this.formPago.get(field).invalid && this.formPago.get(field).touched;
  };

  operar() {

    console.log(this.formPago.valid)
    console.log(this.formPago.invalid)
    console.log(this.formPago.value)
      if (this.editar) {
        this.formPago.value;
        console.log(this.formPago.value)
        this.pagoService.actualizarPago(this.formPago.value).pipe(switchMap(() => {
          return this.pagoService.listar();
        })).subscribe(data => {
          console.log(data)
          this.pagoService.pagoCambio.next(data);
          this.pagoService.mensajeCambio.next('Pago actualizado');
        });
        //todo respecto a editar
      } else {
        this.pagoService.registrarPago(this.formPago.value).pipe(switchMap(() => {
          return this.pagoService.listar();
        })).subscribe(data => {
          console.log(data)
          this.pagoService.pagoCambio.next(data);
          this.pagoService.mensajeCambio.next('Pago registrado');
        });
      }


    this.router.navigate(['/registrarpagosdeservicios']);

  }

  cargarFormulario() {

    if (this.editar) {
      this.pagoService.listarPagoId(this.id).subscribe(data => {
        this.pago = data.data;
        console.log(this.pago)
        this.formPago = new FormGroup({
          '_id': new FormControl(this.pago._id, Validators.required),
          'nombre': new FormControl(this.pago.nombre, Validators.required),
          'fechapago': new FormControl(this.pago.fechapago, Validators.required),
          'cta': new FormControl(this.pago.cta, Validators.required),
          'estado': new FormControl(this.pago.estado, Validators.required),
          'monto': new FormControl(this.pago.monto, Validators.required),
          'foto': new FormControl(this.pago.foto, Validators.required),
        });
      });
    }
  }

  imgSelected(event: HtmlInputEvent) {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imgSelect = reader.result;
      reader.readAsDataURL(this.file);
      $('.cz-file-drop-icon').addClass('cz-file-drop-preview img-thumbnail rounded');
      $('.cz-file-drop-icon').removeClass('cz-file-drop-icon czi-cloud-upload');

    }



  }

  handleFile(event) {
    this.file = event;

  }

  handleFileAct(event) {
    this.fileAct= event;
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
          foto: '',
          categoria: vDatos.categoria
        },
        nameFile: this.file[0].name
      }
      this.pagoService.insertar(query).subscribe(res => {
        this.pagoService.listar().subscribe(data => {
          swal('Exito', 'Se inserto correctamente', 'success')
          this.pagos = data.data;
          this.formFile.reset();
        })
      })
    }
  }

  descargar(fileAct) {
    this.pagoService.descargar(fileAct);
  }

}
