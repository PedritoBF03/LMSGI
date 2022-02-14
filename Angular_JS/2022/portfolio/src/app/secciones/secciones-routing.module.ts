import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormacionComponent } from './formacion/formacion.component';
import { MpagosComponent } from './mpagos/mpagos.component';
import { QsomosComponent } from './qsomos/qsomos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';

const routes: Routes = [
  {path: 'quiensomos', component: QsomosComponent},
  {path: 'formacion', component: FormacionComponent},
  {path: 'trabajos', component: TrabajosComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'ubicacion', component: UbicacionComponent},
  {path: 'mpagos', component: MpagosComponent},
  {path: 'blog', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionesRoutingModule { }
