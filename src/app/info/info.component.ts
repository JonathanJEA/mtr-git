import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  conductor_visible:boolean = true;
  concesion_visible:boolean = true;
  vehiculo_visible:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
