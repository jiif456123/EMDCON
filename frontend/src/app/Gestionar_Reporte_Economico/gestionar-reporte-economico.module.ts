import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { GestionarReporteEconomicoRoutingModule } from './gestionar-reporte-economico-routing.module';

@NgModule({
  imports: [CommonModule, GestionarReporteEconomicoRoutingModule, NgbModule, ChartsModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class GestionarReporteEconomicoModule {}
