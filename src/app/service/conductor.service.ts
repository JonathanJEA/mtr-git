import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Conductor } from '../interface/conductor';
@Injectable({
  providedIn: 'root'
})
export class ConductorService {
   baseUrl = 'http://localhost/ServerMTR/api/';
  constructor(private http:HttpClient) { }

  searchConductor(id:number,licencia:string):Observable<Conductor>{
    return this.http.get<Conductor>(`${this.baseUrl}buscar_conductor`,{params: 
      new HttpParams().set('id',id.toString()).set('licencia',licencia)});
  }
  insertConductor(conductor:Conductor): Observable<Conductor> {
    return this.http.post<Conductor>(`${this.baseUrl}agregar_conductor`,conductor);
  }

  updateConductor(conductor:Conductor): Observable<Conductor>{
    return this.http.put<Conductor>(`${this.baseUrl}modificar_conductor`,conductor);
  }

  deleteConductor(id:number,licencia:string){
    return this.http.delete<Conductor>(`${this.baseUrl}agregar_conductor`,{
      params: new HttpParams()
        .set('id',id.toString())
        .set('licencia',licencia.toString())
    });
  }
}
