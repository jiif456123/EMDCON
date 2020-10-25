import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { VisualizarDocumentosRoutingModule } from './visualizar-documentos-routing.module';

@NgModule({
  imports: [CommonModule, VisualizarDocumentosRoutingModule, NgbModule, ChartsModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class VisualizarDocumentosModule {}

