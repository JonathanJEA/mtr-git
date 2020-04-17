import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Concesion } from '../interface/concesion';
import { Tabla } from '../interface/tabla';

@Injectable({
  providedIn: 'root'
})
export class ConcesionService {
  baseUrl = 'http://localhost/ServerMTR/api/';
  constructor(private http:HttpClient) { }

  getTablaPrincipal(texto:string,filtro:number):Observable<Tabla[]>{
    return this.http.get<Tabla[]>(`${this.baseUrl}registros`,{
      params: new HttpParams()
        .set('buscar',texto)
        .set('filtro',filtro.toString())
    });
  }

  insertConcesion(concesion:Concesion):Observable<Concesion> {
    return this.http.post<Concesion>(`${this.baseUrl}agregar_concesion`,concesion);
  }

  updateConcesion(concesion:Concesion,tmpConcesion:Concesion){
    return this.http.put<Concesion>(`${this.baseUrl}modificar_concesion`,concesion);
  }

  deleteConcesion(id:number,concesion:string){
    return this.http.delete<Concesion>(`${this.baseUrl}eliminar_concesion`,{
      params: new HttpParams()
        .set('id',id.toString())
        .set('concesion',concesion)
    });
  }
}
