import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [

  { path: '', component: IniciarSesionComponent, data: { title: 'Iniciar Sesion' } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciarSesionRoutingModule { }