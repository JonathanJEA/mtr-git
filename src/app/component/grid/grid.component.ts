import { Component, OnInit } from '@angular/core';
import { Conductor } from '../../interface/conductor';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  register: Conductor[] = [
    {
      'id': 1,
      'nombre': 'Dylan',
      'apellido': 'Lopez',
      'curp': 'LXDJ990617EEUA06',
      'direccion': 'residencia #numero, ciudad, estado, pais',
      'licencia': 'CCCC#####',
      'vigencia_licencia': 1646230934,
      'path_documentos': '$/etc/apache/hdocs/servermrt/dylan_lopez_1'
    },
    {
      'id': 2,
      'nombre': 'Oscar',
      'apellido': 'Morales',
      'curp': 'MOA950707DML06',
      'direccion': 'residencia #numero, ciudad, estado, pais',
      'licencia': 'VVVV#####',
      'vigencia_licencia': 1646230934,
      'path_documentos': '$/etc/apache/hdocs/servermrt/oscar_morales_2'
    },
  {
    'id': 3,
    'nombre': 'Diana',
    'apellido': 'Colunga',
    'curp': 'CDF950211NLMSL06',
    'direccion': 'residencia #numero, ciudad, estado, pais',
    'licencia': 'DDDD#####',
    'vigencia_licencia': 1646230934,
    'path_documentos': '$/etc/apache/hdocs/servermrt/diana_Colunga_3'
  }];
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
