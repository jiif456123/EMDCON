import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { PresupuestoService } from '../services/presupuesto/presupuesto.service';
import { Presupuesto } from '../models/presupuesto.model';
import { FilterPipe } from 'ngx-filter-pipe';
import { RegistrarPagodeServiciosModule } from '../Registrar_Pagos_de_Servicios/registrar-pago-de-servicios.module';
import swal from 'sweetalert2';
import { Ingreso } from '../models/ingreso.model';
//declare function init_plugins();

@Component({
  selector: 'app-gestionar-presupuesto',
  templateUrl: './gestionar-presupuesto.component.html',
  styleUrls: ['./gestionar-presupuesto.component.scss']
})
export class GestionarPresupuestoComponent implements OnInit {
  precioIngresos = 0;
  preciodeFila = 0;
  Egresos: number;
  Ingresos: number;
  mes1: string;
  Total: number;
  countF: number;
  countAF: number;
  id: string;
  precioTotal: number;
  public presupuesto: Presupuesto = new Presupuesto();
  public pres: any = { mes: '' }
  presupuestos: Presupuesto[] = [];
  term: any;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private presupuestoService: PresupuestoService,
    private pipe: FilterPipe,
  ) { }
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
        if (x.asunto === 5) {
          console.log(x.tipoAsunto)
          countAF = countAF + x.monto
        }
      })
      console.log('suma de meses de enero ', countF)
      console.log('suma de Pago de administrador', countAF)
      console.log(data.data)
    })


  }

  Summa() {
    //Calculamos el TOTAL
    this.Total = this.presupuestos.reduce((
      acc,
      obj,
    ) => acc + (obj.monto + 0),
      0);
    console.log("Total: ", this.Total)
  }
  calcular() {
    this.Total = this.presupuestos.reduce((
      acc,
      obj,
    ) => acc + (obj.monto * obj.asunto),
      0);
    console.log("Total: ", this.Total)
  }

  calculardatosE() {
    this.countAF=0;
    this.countF=0;
    this.presupuestos.filter(x => {
      if (x.mes == 'Enero') {
        console.log(x.mes)
        this.countF = this.countF + x.monto
      }
      if (x.asunto === 5) {
        console.log(x.tipoAsunto)
        this.countAF = this.countAF + x.monto
      }
    })
    console.log('suma de meses de enero ', this.countF)
    console.log('suma de Pago de administrador', this.countAF)
  }
   calculardatosTotalEgresos(){
    this.Egresos=0;
    this.countF=0;
    this.presupuestos.filter(x => {
      if (x.mes == 'Enero') {
        console.log(x.mes)
        this.countF = this.countF + x.monto
      }
      if (x.tipoAsunto === 1) {
        console.log(x.tipoAsunto)
        this.Egresos = this.Egresos + x.monto
      }
    })
    console.log('suma total de egresos ', this.Egresos)
    console.log('suma de Pago de administrador', this.countAF)
   }
   calculardatosTotalIngresos(){
    this.Ingresos=0;
    this.countF=0;
    this.presupuestos.filter(x => {
      if (x.mes == 'Enero') {
        console.log(x.mes)
        this.countF = this.countF + x.monto
      }
      if (x.tipoAsunto === 0) {
        console.log(x.tipoAsunto)
        this.Ingresos = this.Ingresos + x.monto
      }
    })
    console.log('suma total de egresos ', this.Ingresos)
    console.log('suma de Pago de administrador', this.countF)
   }
  calculardatosF() {
    this.countAF=0;
    this.countF=0;
    this.presupuestos.filter(x => {
      if (x.mes == 'Febrero') {
        console.log(x.mes)
        this.countF = this.countF + x.monto
      }
      if (x.asunto === 3) {
        console.log(x.tipoAsunto)
        this.countAF = this.countAF + x.monto
      }
    })
    console.log('suma de meses de enero ', this.countF)
    console.log('suma de Pago de administrador', this.countAF)
  }

  escribir(opcion: string){
    this.presupuesto.mes=(opcion);
    }
}
