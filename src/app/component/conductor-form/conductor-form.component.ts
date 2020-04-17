import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Conductor } from '../../interface/conductor';
import {ConductorService} from '../../service/conductor.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-conductor-form',
  templateUrl: './conductor-form.component.html',
  styleUrls: ['./conductor-form.component.css']
})
export class ConductorFormComponent implements OnInit {
  
  conductor:Conductor= {
   id:0,
   nombre:"",
   apellido:"",
   curp:"",
   licencia:"",
   vigencia_licencia:0,
   direccion:"",
   path_documentos:""
  };
  private tmp_conductor:Conductor;
  error_textbox_nombre:boolean=false;
  error_textbox_apellido:boolean=false;
  error_textbox_curp:boolean=false;
  error_textbox_licencia:boolean=false;
  error_textbox_vigencia_licencia:boolean=false;
  error_textbox_direccion:boolean=false;
  error_textbox_path_documentos:boolean=false;
  textbox_id_visible: boolean = false;
  constructor(private conductorService:ConductorService) { }

  ngOnInit(): void {
    this.error_textbox_nombre=false;
    this.error_textbox_apellido=false;
    this.error_textbox_curp=false;
    this.error_textbox_licencia=false;
    this.error_textbox_vigencia_licencia=false;
    this.error_textbox_direccion=false;
    this.error_textbox_path_documentos=false;
    this.tmp_conductor = this.conductor;
    this.textbox_id_visible = this.verificar();
  }

  verificar(): boolean {
    if(
      this.conductor.nombre != "" || this.conductor.apellido != "" ||
      this.conductor.curp != "" || this.conductor.licencia != ""
      )
        return false;
    return true;
  }

  agregar_conductor() {

    let now = new Date();
        
    if(this.conductor.nombre == "")
      this.error_textbox_nombre = true;
    else
      this.error_textbox_nombre = false;
    console.log(this.error_textbox_nombre);
    if(this.conductor.licencia == "")
      this.error_textbox_licencia = true;
    else
      this.error_textbox_licencia = false;

    if(this.conductor.curp == "")
      this.error_textbox_curp = true;
    else
      this.error_textbox_curp = false;

    if( this.conductor.vigencia_licencia - now.getDate() < 0)
      this.error_textbox_vigencia_licencia = true;
    else
      this.error_textbox_vigencia_licencia = false;
    console.log(this.conductor.vigencia_licencia - now.getDate());
    console.log(this.conductor);
    if(
      !this.error_textbox_nombre &&
      !this.error_textbox_apellido &&
      !this.error_textbox_curp &&
      !this.error_textbox_licencia &&
      !this.error_textbox_vigencia_licencia &&
      !this.error_textbox_direccion &&
      !this.error_textbox_path_documentos
    )
      this.conductorService.insertConductor(this.conductor)
        .subscribe((data: Conductor)=>{
          console.log(data);
        });
    
  }

  buscar_conductor():void {
    
    if(this.conductor.id > 0)
      this.conductorService
        .searchConductor(this.conductor.id,this.conductor.licencia)
        .subscribe( data => { 
          this.conductor.id = data.id;
          this.conductor.nombre = data.nombre;
          this.conductor.apellido = data.apellido;
          this.conductor.direccion = data.direccion;
          this.conductor.curp = data.curp;
          this.conductor.licencia = data.licencia;
          this.conductor.vigencia_licencia = data.vigencia_licencia;
          this.conductor.path_documentos = data.path_documentos;
          console.log(this.conductor);
        });

  }
  eliminar_conductor():void {
    this.conductorService.deleteConductor(this.conductor.id,this.conductor.licencia);
  }

  modificar_conductor():void {
    this.conductorService.updateConductor(this.conductor);
  }
}
