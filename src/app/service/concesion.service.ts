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
  baseUrl = 'http://localhost/ServerMTR/';
  constructor(private http:HttpClient) { }

  getTablaPrincipal(texto:string,filtro:number):Observable<any[]>{
    let param1 = new HttpParams().set('buscar',texto).set('filtro',filtro.toString());
    return this.http.get<any[]>(`${this.baseUrl}api/registros`,{params:param1});
  }

  
}
