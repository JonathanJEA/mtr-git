import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  conductor_visible:boolean = true;
  concesion_visible:boolean = false;
  vehiculo_visible:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
