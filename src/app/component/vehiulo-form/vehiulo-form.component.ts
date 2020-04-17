import { Component, OnInit } from '@angular/core';

import { Vehiculo } from '../../interface/vehiculo';

@Component({
  selector: 'app-vehiulo-form',
  templateUrl: './vehiulo-form.component.html',
  styleUrls: ['./vehiulo-form.component.css']
})
export class VehiuloFormComponent implements OnInit {

  vehiculo:Vehiculo={
    id:0,
    matricula: "",
    id_marca: "",
    modelo: 0,
    km_recorrido: 0
  };
  constructor() { }

  ngOnInit(): void {
    
  }

}
