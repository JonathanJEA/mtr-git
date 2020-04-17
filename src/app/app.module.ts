import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { GridComponent } from './component/grid/grid.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConductorFormComponent } from './component/conductor-form/conductor-form.component';
import { InfoComponent } from './info/info.component';


import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';

import { HttpClientModule } from '@angular/common/http';
import { VehiuloFormComponent } from './component/vehiulo-form/vehiulo-form.component';
import { ConcesionFormComponent } from './component/concesion-form/concesion-form.component';
import { MantenimientoFormComponent } from './component/mantenimiento-form/mantenimiento-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    GridComponent,
    DashboardComponent,
    ConductorFormComponent,
    InfoComponent,
    VehiuloFormComponent,
    ConcesionFormComponent,
    MantenimientoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
