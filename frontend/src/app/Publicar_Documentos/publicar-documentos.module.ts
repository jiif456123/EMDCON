import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { PublicarDocumentosRoutingModule } from './publicar-documentos-routing.module';

@NgModule({
  imports: [CommonModule, PublicarDocumentosRoutingModule, NgbModule, ChartsModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class PublicarDocumentosModule {}