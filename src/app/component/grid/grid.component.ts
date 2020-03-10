import { Component, OnInit } from '@angular/core';
import { Conductor } from '../../interface/conductor';

import { ConcesionService } from  '../../service/concesion.service';
import { Tabla } from 'src/app/interface/tabla';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  register:Tabla[];
  buscar: string='a';
  filtro: number=2;
  constructor(private concesionService: ConcesionService) { }

  ngOnInit(): void {
    this.concesionService.getTablaPrincipal(this.buscar,this.filtro).subscribe(
      result => this.register = result  
    );
  }
  refreshTable(){
    this.concesionService.getTablaPrincipal(this.buscar,this.filtro).subscribe(
      result => this.register = result  
    );
    console.log(this.register);
  }
  table_h = [
    {'text':'Concesion','filter':true},
    {'text':'Nombre','filter':true},
    {'text':'Apellido','filter':false},
    {'text':'Licencia','filter':false},
    {'text':'Matricula','filter':true},
    {'text':'Modelo','filter':true},
    {'text':'KM Recorridos','filter':false}
  ];
  
}
