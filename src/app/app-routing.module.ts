import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ReporteComponent } from './reporte/reporte.component';
import { ReporteRecepcionMaterialQuirofanoComponent } from './reporte-recepcion-material-quirofano/reporte-recepcion-material-quirofano.component';
import { ReporteSolicitudesProgramacionCirugiaComponent } from './reporte-solicitudes-programacion-cirugia/reporte-solicitudes-programacion-cirugia.component';
import { ReporteAlmacenComponent } from './reporte-almacen/reporte-almacen.component';
import { ReporteEmpaqueMaterialQuirofanoComponent } from './reporte-empaque-material-quirofano/reporte-empaque-material-quirofano.component';
import { ReporteEmpaqueMaterialOtrasAreasProvedorExternoComponent } from './reporte-empaque-material-otras-areas-provedor-externo/reporte-empaque-material-otras-areas-provedor-externo.component';
import { ReporteDistribucionOtrasAreasProvedorExternoComponent } from './reporte-distribucion-otras-areas-provedor-externo/reporte-distribucion-otras-areas-provedor-externo.component';
import { ReporteRecepcionMaterialProvedorExtrnoComponent } from './reporte-recepcion-material-provedor-extrno/reporte-recepcion-material-provedor-extrno.component';
import { ReporteRecepcionMaterialOtrasAreasHospitalareasComponent } from './reporte-recepcion-material-otras-areas-hospitalareas/reporte-recepcion-material-otras-areas-hospitalareas.component';
import { ReporteEsterilizacionComponent } from './reporte-esterilizacion/reporte-esterilizacion.component';
import { ReporteLavadoManualComponent } from './reporte-lavado-manual/reporte-lavado-manual.component';
import { ReporteLavadoAtomaticoComponent } from './reporte-lavado-atomatico/reporte-lavado-atomatico.component';
import { DISTRIBUCIONMATERIALDEQUIROFANOComponent } from './distribucion-material-de-quirofano/distribucion-material-de-quirofano.component';

const routes: Routes = [

{ path:'', component: ReporteComponent},
{ path:'1', component: ReporteRecepcionMaterialQuirofanoComponent},
{ path:'2', component: ReporteSolicitudesProgramacionCirugiaComponent},
{ path:'3', component: ReporteAlmacenComponent},
{ path:'4', component: ReporteEmpaqueMaterialQuirofanoComponent},
{ path:'5', component: ReporteEmpaqueMaterialOtrasAreasProvedorExternoComponent},
{ path:'6', component: ReporteDistribucionOtrasAreasProvedorExternoComponent},
{ path:'7', component: ReporteRecepcionMaterialProvedorExtrnoComponent},
{ path:'8', component: ReporteRecepcionMaterialOtrasAreasHospitalareasComponent},
{ path:'9', component: ReporteEsterilizacionComponent},
{ path:'10', component: ReporteLavadoManualComponent},
{ path:'11', component:  ReporteLavadoAtomaticoComponent},
{ path:'12', component:  DISTRIBUCIONMATERIALDEQUIROFANOComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
