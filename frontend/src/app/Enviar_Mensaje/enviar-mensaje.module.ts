import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { EnviarMensajeRoutingModule } from './enviar-mensaje-routing.module';

@NgModule({
  imports: [CommonModule, EnviarMensajeRoutingModule, NgbModule, ChartsModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class EnviarMensajeModule {}
