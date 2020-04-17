import { Component, OnInit } from '@angular/core';
import { Concesion } from '../../interface/concesion';
@Component({
  selector: 'app-concesion-form',
  templateUrl: './concesion-form.component.html',
  styleUrls: ['./concesion-form.component.css']
})
export class ConcesionFormComponent implements OnInit {

  concesion:Concesion={
    id: 0,
    concesion:"",
    id_conductor: 0,
    id_vehiculo: 0,
    path_documentos: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
