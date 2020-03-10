import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Conductor } from '../interface/conductor';
@Injectable({
  providedIn: 'root'
})
export class ConductorService {
  baseUrl = 'http://localhost/ServerMTR/';
  constructor(private http:HttpClient) { }

  searchConductor(id:number):Observable<Conductor>{
    return this.http.get<Conductor>(`${this.baseUrl}`,{params: 
      new HttpParams().set('id',id.toString())});
  }
  insertConductor(){

  }

  updateConductor(){

  }

  deleteConductor(){

  }
}
