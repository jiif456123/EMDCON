import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { AdministrarVisitaRoutingModule } from './administrar-visita-routing.module';

@NgModule({
  imports: [CommonModule, AdministrarVisitaRoutingModule, NgbModule, ChartsModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class AdministrarVisitaModule {}
