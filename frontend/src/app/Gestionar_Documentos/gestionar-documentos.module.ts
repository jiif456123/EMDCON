import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { GestionarDocumentosRoutingModule } from './gestionar-documentos-routing.module';

@NgModule({
  imports: [CommonModule, GestionarDocumentosRoutingModule, NgbModule, ChartsModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class GestionarDocumentosModule {}
