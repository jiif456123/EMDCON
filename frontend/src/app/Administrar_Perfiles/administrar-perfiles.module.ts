import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { AdministrarPerfilesRoutingModule } from './administrar-perfiles-routing.module';
import { PerfilesComponent } from './perfiles/perfiles.component';

@NgModule({
  imports: [CommonModule, AdministrarPerfilesRoutingModule, NgbModule, ChartsModule],
  exports: [],
  declarations: [PerfilesComponent],
  providers: [],
})
export class AdministrarPerfilesModule {}
