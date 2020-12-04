import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { SolicitarAreaComunRoutingModule } from './solicitar-area-comun-routing.module';
import { SolicitarAreaComponent } from './solicitar-area/solicitar-area.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';

@NgModule({
  imports: [
    CommonModule,
    SolicitarAreaComunRoutingModule,
    NgbModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule,
  ],
  exports: [],
  declarations: [SolicitarAreaComponent],
  providers: [FormsModule],
})
export class SolicitarAreaComunModule { }