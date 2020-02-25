import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
