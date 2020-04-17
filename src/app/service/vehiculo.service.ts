import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../interface/vehiculo';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  baseUrl = 'http://localhost/ServerMTR/api/';
  constructor(private http: HttpClient) { }

  insertVehiculo(vehiculo:Vehiculo):Observable<Vehiculo>{
    return this.http.post<Vehiculo>(`${this.baseUrl}agregar_vehiculo`,vehiculo);
  }

  updateVehiculo(vehiculo:Vehiculo){
    return this.http.put<Vehiculo>(`${this.baseUrl}modificar_vehiculo`,vehiculo);
  }

  deleteVehiculo(id:number,matricula:string){
    return this.http.delete(`${this.baseUrl}eliminar_vehiculo`,{
      params: new HttpParams()
        .set('id',id.toString())
        .set('matricula',matricula)
      });
  }

}
