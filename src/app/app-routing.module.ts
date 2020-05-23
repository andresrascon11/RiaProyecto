import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// se agregar modulo
import {MesaComponent} from './mesa/mesa.component';
import {PuertaComponent} from './puerta/puerta.component';
import {RefrigeradorComponent} from './refrigerador/refrigerador.component';
import {SillaComponent} from './silla/silla.component';


//por ultimo modificar el arreglo de las rutas
const routes: Routes = [
  {path: 'mesa', component: MesaComponent},
  {path: 'puerta', component: PuertaComponent},
  {path: 'refrigerador', component: RefrigeradorComponent},
  {path: 'silla', component: SillaComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
