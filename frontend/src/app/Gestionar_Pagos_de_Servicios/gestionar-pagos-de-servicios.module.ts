import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { GestionarPagosdeServiciosRoutingModule } from './gestionar-pagos-de-servicios-routing.module';

@NgModule({
  imports: [CommonModule, GestionarPagosdeServiciosRoutingModule, NgbModule, ChartsModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class GestionarPagosdeServiciosModule {}
