import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ReporteComponent } from './reporte/reporte.component';

const routes: Routes = [

{ path:'1', component: ReporteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
