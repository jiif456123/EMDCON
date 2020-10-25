import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { ResgistrarPagodeServiciosRoutingModule } from './registrar-pago-de-servicios-routing.module';

@NgModule({
  imports: [CommonModule, ResgistrarPagodeServiciosRoutingModule, NgbModule, ChartsModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class RegistrarPagodeServiciosModule {}