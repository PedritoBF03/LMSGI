import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeccionesRoutingModule } from './secciones-routing.module';
import { QsomosComponent } from './qsomos/qsomos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FormacionComponent } from './formacion/formacion.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { MpagosComponent } from './mpagos/mpagos.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    QsomosComponent,
    ServiciosComponent,
    FormacionComponent,
    TrabajosComponent,
    ContactoComponent,
    UbicacionComponent,
    MpagosComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    SeccionesRoutingModule
  ]
})
export class SeccionesModule { }
