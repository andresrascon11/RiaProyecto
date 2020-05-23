import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PuertaComponent } from './puerta/puerta.component';
import { MesaComponent } from './mesa/mesa.component';
import { SillaComponent } from './silla/silla.component';
import { RefrigeradorComponent } from './refrigerador/refrigerador.component';

@NgModule({
  declarations: [
    AppComponent,
    PuertaComponent,
    MesaComponent,
    SillaComponent,
    RefrigeradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
