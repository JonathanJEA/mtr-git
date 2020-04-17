import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './component/grid/grid.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  {path: '', component: GridComponent},
  { path: 'dashboard', component:GridComponent },
  { path: 'info', component:InfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
