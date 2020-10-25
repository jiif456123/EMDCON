import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { AdministrarPerfilesRoutingModule } from './administrar-perfiles-routing.module';

@NgModule({
  imports: [CommonModule, AdministrarPerfilesRoutingModule, NgbModule, ChartsModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class AdministrarPerfilesModule {}
