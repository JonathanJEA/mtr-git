import { Component, OnInit } from '@angular/core';

import {Sort} from '@angular/material/sort';

import { ConcesionService } from  '../../service/concesion.service';
import { Tabla } from 'src/app/interface/tabla';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  register:Tabla[];
  buscar: string;
  filtro: number;
  constructor(private concesionService: ConcesionService) {
      
   }
  sortedData: Tabla[];
  ngOnInit(): void {
    this.buscar = 'a';
    this.filtro = 2;
    this.concesionService.getTablaPrincipal(this.buscar,this.filtro).subscribe(
      data => {
        this.register = data.slice();
        this.sortedData=this.register.slice();
        console.log(this.sortedData);
      });
    
  }
  
  refreshTable() : Tabla[]{
    this.concesionService.getTablaPrincipal(this.buscar,this.filtro).subscribe(
      data => {
        this.register = data.slice();
      }

    );
    return this.register;
  }
  
  sortData(sort: Sort) {
    this.refreshTable();
    const data = this.register.slice();
    console.log("step 1");
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      console.log("not data");
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'concesion': return compare(a.concesion, b.concesion, isAsc);
        case 'nombre': return compare(a.nombre, b.nombre, isAsc);
        case 'apellido': return compare(a.apellido, b.apellido, isAsc);
        case 'licencia': return compare(a.licencia, b.licencia, isAsc);
        case 'matricula': return compare(a.matricula, b.matricula, isAsc);
        case 'modelo': return compare(a.modelo, b.modelo, isAsc);
        case 'km_recorrido': return compare(a.km_recorrido, b.km_recorrido, isAsc);
        default: return 0;
      }
    });
  }
  
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}