import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { contrasenaService } from 'src/app/services/contrasena/contrasena.servicet';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.scss']
})
export class CambiarContrasenaComponent implements OnInit {

  formCorreo:FormGroup;
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private contraService: contrasenaService
    ) { }

  ngOnInit(): void {

    this.formCorreo = this.formBuilder.group({
      txtCorreo: ['', [Validators.required, Validators.email]],
    })
  }

  Enviar(){
    if(this.formCorreo.invalid){
      return;
    }

    var datos = this.formCorreo.value;
    var query = {
      correo: datos.txtCorreo
    }
    this.contraService.registrar(query).subscribe(data=>{
      swal('Correcto', 'Se envio el correo, revise su Spam', 'success').then(r=>{
        this.router.navigate(['/iniciarsesion']);
      })

    })

  }

}
