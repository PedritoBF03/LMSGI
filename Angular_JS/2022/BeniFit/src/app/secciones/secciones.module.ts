import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeccionesRoutingModule } from './secciones-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { NoticiasComponent } from './noticias/noticias.component';


@NgModule({
  declarations: [
    InicioComponent,
    SobreMiComponent,
    ServiciosComponent,
    UbicacionComponent,
    TrabajosComponent,
    NoticiasComponent
  ],
  imports: [
    CommonModule,
    SeccionesRoutingModule
  ]
})
export class SeccionesModule { }
