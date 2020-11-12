import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { EnviarMensajeRoutingModule } from './enviar-mensaje-routing.module';
import { ChatComponent } from './chat/chat.component';
import { ConversacionesComponent } from './conversaciones/conversaciones.component';
import { SocketService } from '../services/socket/socket.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, EnviarMensajeRoutingModule, NgbModule, ChartsModule, FormsModule],
  exports: [],
  declarations: [ChatComponent, ConversacionesComponent],
  providers: [SocketService],
})
export class EnviarMensajeModule { }
