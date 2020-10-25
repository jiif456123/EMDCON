import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { IniciarSesionRoutingModule } from './iniciar-sesion-routing.module';

@NgModule({
  imports: [CommonModule, IniciarSesionRoutingModule, NgbModule, ChartsModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class IniciarSesionModule {}
