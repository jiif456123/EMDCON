import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { SolicitarAreaComunRoutingModule } from './solicitar-area-comun-routing.module';

@NgModule({
  imports: [CommonModule, SolicitarAreaComunRoutingModule, NgbModule, ChartsModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class SolicitarAreaComunModule {}