import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReporteComponent } from './reporte/reporte.component';

import {MatTableModule} from '@angular/material/table';
import { ReporteRecepcionMaterialQuirofanoComponent } from './reporte-recepcion-material-quirofano/reporte-recepcion-material-quirofano.component';
import { ReporteSolicitudesProgramacionCirugiaComponent } from './reporte-solicitudes-programacion-cirugia/reporte-solicitudes-programacion-cirugia.component';
import { ReporteAlmacenComponent } from './reporte-almacen/reporte-almacen.component';
import { ReporteEmpaqueMaterialQuirofanoComponent } from './reporte-empaque-material-quirofano/reporte-empaque-material-quirofano.component';
import { ReporteEmpaqueMaterialOtrasAreasProvedorExternoComponent } from './reporte-empaque-material-otras-areas-provedor-externo/reporte-empaque-material-otras-areas-provedor-externo.component';
import { ReporteDistribucionOtrasAreasProvedorExternoComponent } from './reporte-distribucion-otras-areas-provedor-externo/reporte-distribucion-otras-areas-provedor-externo.component';
import { ReporteRecepcionMaterialProvedorExtrnoComponent } from './reporte-recepcion-material-provedor-extrno/reporte-recepcion-material-provedor-extrno.component';
import { ReporteRecepcionMaterialOtrasAreasHospitalareasComponent } from './reporte-recepcion-material-otras-areas-hospitalareas/reporte-recepcion-material-otras-areas-hospitalareas.component';
import { ReporteLavadoAtomaticoComponent } from './reporte-lavado-atomatico/reporte-lavado-atomatico.component';
import { ReporteLavadoManualComponent } from './reporte-lavado-manual/reporte-lavado-manual.component';
import { ReporteEsterilizacionComponent } from './reporte-esterilizacion/reporte-esterilizacion.component';
import { DISTRIBUCIONMATERIALDEQUIROFANOComponent } from './distribucion-material-de-quirofano/distribucion-material-de-quirofano.component';


@NgModule({
  declarations: [
    AppComponent,
    ReporteComponent,
    ReporteRecepcionMaterialQuirofanoComponent,
    ReporteSolicitudesProgramacionCirugiaComponent,
    ReporteAlmacenComponent,
    ReporteEmpaqueMaterialQuirofanoComponent,
    ReporteEmpaqueMaterialOtrasAreasProvedorExternoComponent,
    ReporteDistribucionOtrasAreasProvedorExternoComponent,
    ReporteRecepcionMaterialProvedorExtrnoComponent,
    ReporteRecepcionMaterialOtrasAreasHospitalareasComponent,
    ReporteLavadoAtomaticoComponent ,
    ReporteLavadoManualComponent,
    ReporteEsterilizacionComponent,
    DISTRIBUCIONMATERIALDEQUIROFANOComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
