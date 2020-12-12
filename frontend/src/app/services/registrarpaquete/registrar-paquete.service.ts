import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Registrarpaquete } from '../../models/registrar-paquete';


@Injectable({
  providedIn: 'root'
})
export class PaqueteService { 

  selectedPaquete: Registrarpaquete;
  paquete: Registrarpaquete[];

  url_API: string = environment.endpoint.concat('/paquete');
  paqueteCambio = new Subject<any>();
  mensajeCambio = new Subject<string>();
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any>(`${this.url_API}`);
  };

  getPaquete(){
    return this.http.get<Registrarpaquete[]>(this.url_API);
  }

  registrarPaquete(Registrarpaquete: any){
    return this.http.post<any>(this.url_API, Registrarpaquete);
  }
  actualizarPaquete(Registrarpaquete: Registrarpaquete) {
    return this.http.put(this.url_API + `/${Registrarpaquete._id}`, Registrarpaquete);
  }
  listarPaqueteId(id: string){
    return this.http.get<any>(`${this.url_API}/${id}`);
  }
  eliminar(_id: string) {
    return this.http.delete<any>(`${this.url_API}/${_id}`);
  };
}