import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { ConsultarVisitaRoutingModule } from './consultar-visita-routing.module';

@NgModule({
  imports: [CommonModule, ConsultarVisitaRoutingModule, NgbModule, ChartsModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class ConsultarVisitaModule {}
