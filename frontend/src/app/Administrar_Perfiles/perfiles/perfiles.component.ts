import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.scss']
})
export class PerfilesComponent implements OnInit {

  usuarios: User[]
  constructor(private userService:UsuarioService) { }

  ngOnInit(): void {
    this.userService.listar().subscribe(data=>{
      this.usuarios=data.data;
    })
  }

}
