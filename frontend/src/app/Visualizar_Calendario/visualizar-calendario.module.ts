import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { VisualizarCalendarioRoutingModule } from './visualizar-calendario-routing.module';

@NgModule({
  imports: [CommonModule, VisualizarCalendarioRoutingModule, NgbModule, ChartsModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class VisualizarCalendarioModule {}





