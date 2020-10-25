import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { GestionarAreaComunRoutingModule } from './gestionar-area-comun-routing.module';

@NgModule({
  imports: [CommonModule, GestionarAreaComunRoutingModule, NgbModule, ChartsModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class GestionarAreaComunModule {}
