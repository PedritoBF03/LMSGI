import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'sobre_mi', component: SobreMiComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'ubicacion', component: UbicacionComponent },
  { path: 'trabajos', component: TrabajosComponent },
  { path: 'noticias', component: NoticiasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionesRoutingModule { }
