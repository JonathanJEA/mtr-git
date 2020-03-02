import { Injectable } from '@angular/core';
import { Concesion } from '../interface/concesion';
import { Tabla } from '../interface/tabla';
@Injectable({
  providedIn: 'root'
})
export class ConcesionService {
  //const URL = 'localhost:8080/apl/servermtr/';
  constructor() { }
  getTabla():Tabla{
    return;
  }
}
