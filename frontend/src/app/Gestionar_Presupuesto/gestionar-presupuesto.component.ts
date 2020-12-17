import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DOCUMENT, getLocaleFirstDayOfWeek } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { PresupuestoService } from '../services/presupuesto/presupuesto.service';
import { Presupuesto } from '../models/presupuesto.model';
import { FilterPipe } from 'ngx-filter-pipe';
import { RegistrarPagodeServiciosModule } from '../Registrar_Pagos_de_Servicios/registrar-pago-de-servicios.module';
import swal from 'sweetalert2';
import * as printJS from 'print-js';
import { Ingreso } from '../models/ingreso.model';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { TemplateAst } from '@angular/compiler';
import { data } from 'jquery';

//declare function init_plugins();

@Component({
  selector: 'app-gestionar-presupuesto',
  templateUrl: './gestionar-presupuesto.component.html',
  styleUrls: ['./gestionar-presupuesto.component.scss']
})

export class GestionarPresupuestoComponent implements OnInit {
  mess = [
    { ta: 'Enero' },
    { ta: 'Febrero' },
    { ta: 'Marzo' },
    { ta: 'Abril' },
    { ta: 'Mayo' },
    { ta: 'Junio' },
    { ta: 'Julio' },
    { ta: 'Agosto' },
    { ta: 'Septiembre' },
    { ta: 'Octubre' },
    { ta: 'Noviembre' },
    { ta: 'Diciembre' },
  ];
  precioIngresos = 0;
  preciodeFila = 0;
  Ra: Presupuesto;
  teams:Array<Presupuesto>;
  teamJSON: JSON;
  Egresos: number;
  Ingresos: number;
  mes1: string;
  Total: number;
  Ingresosp:number;
  Ingresosp1:number;
  Egresosp:number;
  Egresosp1:number;
  ManA:number;
  ManA1:number;
  PaM:number;
  PaM1:number;
  Luz:number;
  Luz1:number;
  Agua:number;
  Agua1:number;
  Otros:number;
  Otros1:number;
  id: string;
  precioTotal: number;
  precioFinal: number;
  public presupuesto: Presupuesto = new Presupuesto();
  public pres: any = { mes: '' }
  presupuestos: Presupuesto[] = [];
  press: Presupuesto[];
  term: any;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private presupuestoService: PresupuestoService,
    private pipe: FilterPipe,
  ) {
  }
  ngOnInit() {
    //init_plugins();

    this.presupuestoService.listar().subscribe(data => {
      this.presupuestos = data.data;
      var countF = 0
      var countAF = 0
      this.presupuestos.filter(x => {
        if (x.mes == 'Enero') {
          console.log(x.mes)
          countF = countF + x.monto
        }
        if (x.asunto === 'Mantenimiento de ascensor') {
          console.log(x.tipoAsunto)
          countAF = countAF + x.monto
        }
      })
      console.log('suma de meses de enero ', countF)
      console.log('suma de Pago de administrador', countAF)
      console.log(data.data)
    })
  }

  IngresosPre() {
    this.Ingresosp=0;
    this.Ingresosp1=0;
    this.presupuestos.filter(x => {
      if (x.mes == 'Enero'  && 'Febrero') {
        console.log(x.mes)
        this.Ingresosp = this.Ingresosp + x.monto
      }
      if (x.mes == 'Enero')
      if (x.tipoAsunto === 'Ingreso') {
        console.log(x.tipoAsunto)
        this.Ingresosp1 = this.Ingresosp1 + x.monto
      }
    })
    console.log('suma de meses de enero ', this.Ingresosp)
    console.log('Suma de los ingresos de Enero ', this.Ingresosp1)
  }

  EgresosPre() {
    this.Egresosp=0;
    this.Egresosp1=0;
    this.presupuestos.filter(x => {
      if (x.mes == 'Enero') {
        console.log(x.mes)
        this.Egresosp = this.Egresosp + x.monto
      }
      if (x.mes == 'Enero')
      if (x.tipoAsunto === 'Egreso') {
        console.log(x.tipoAsunto)
        this.Egresosp1 = this.Egresosp1 + x.monto
      }
    })
    console.log('suma de meses de enero ', this.Egresosp)
    console.log('Suma de los ingresos de Enero ', this.Egresosp1)
  }

  AscensorPre() {
    this.ManA=0;
    this.ManA1=0;
    this.presupuestos.filter(x => {
      if (x.mes == 'Enero') {
        console.log(x.mes)
        this.ManA = this.ManA + x.monto
      }
      if (x.mes == 'Enero')
      if (x.asunto === 'Mantenimiento de ascensor') {
        console.log(x.asunto)
        this.ManA1 = this.ManA1 + x.monto
      }
    })
    console.log('suma de meses de enero ', this.ManA)
    console.log('Suma de los ascensor de Enero ', this.ManA1)
  }

  MantPre() {
    this.PaM=0;
    this.PaM1=0;
    this.presupuestos.filter(x => {
      if (x.mes == 'Enero') {
        console.log(x.mes)
        this.PaM = this.PaM + x.monto
      }
      if (x.mes == 'Enero')
      if (x.asunto === 'Pago de mantenimiento') {
        console.log(x.asunto)
        this.PaM1 = this.PaM1 + x.monto
      }
    })
    console.log('suma de meses de enero ', this.PaM)
    console.log('Suma de los ascensor de Enero ', this.PaM1)
  }

  AguaPre() {
    this.Agua=0;
    this.Agua1=0;
    this.presupuestos.filter(x => {
      if (x.mes == 'Enero') {
        console.log(x.mes)
        this.Agua = this.Agua + x.monto
      }
      if (x.mes == 'Enero')
      if (x.asunto === 'Pago de servicio de agua') {
        console.log(x.asunto)
        this.Agua1 = this.Agua1 + x.monto
      }
    })
    console.log('suma de meses de enero ', this.Agua)
    console.log('Suma de los ascensor de Enero ', this.Agua1)
  }

  LuzPre() {
    this.Luz=0;
    this.Luz1=0;
    this.presupuestos.filter(x => {
      if (x.mes == 'Enero') {
        console.log(x.mes)
        this.Luz = this.Luz + x.monto
      }
      if (x.mes == 'Enero')
      if (x.asunto === 'Pago de servicio de luz') {
        console.log(x.asunto)
        this.Luz1 = this.Luz1 + x.monto
      }
    })
    console.log('suma de meses de enero ', this.Luz)
    console.log('Suma de los ascensor de Enero ', this.Luz1)
  }

  escribir(opcion: string){
    this.presupuesto.mes=(opcion);
    }

    listaprubea(){
      this.presupuestoService.listar().subscribe(data => {
        this.presupuestos = data.data;
        this.teamJSON = data.data;
    })
  }

     imprimir(){
      printJS({printable: this.presupuestos , properties: ['asunto', 'estado', 'mes', 'monto'], type: 'json'})
     }

    //* Sumatotal(){
   //*    this.precioTotal=0;
   //*    var presupuesto = this.presupuestos(this.press, this.term);
   //*    presupuesto.forEach(element => {
   //*      this.precioTotal+=element.monto;
   //*    });
   //*   }

  //*   sumarPrecio(){
   //*   this.precioTotal=0;
   //*   var presupuesto = this.presupuestos.filter(this.presupuestos, this.term);
   //*   presupuesto.forEach(element => {
     //*   this.precioTotal+=element.monto;
    //*  });
 //*   }
}
