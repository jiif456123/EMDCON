import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { ConsultarResidenteMorosoRoutingModule } from './consultar-residente-moroso-routing.module';


@NgModule({
  imports: [CommonModule, ConsultarResidenteMorosoRoutingModule, NgbModule, ChartsModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class ConsultarResidenteMorosoModule {}
