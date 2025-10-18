import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Contador } from './contador/contador';
import { Boton } from './components/boton/boton';
import { FormsModule } from '@angular/forms';
import { Directivas } from './directivas/directivas';
import { Resaltar } from './custom-directives/resaltar';
import { NbaPlayers } from './nba-players/nba-players';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    Contador,
    Boton,
    Directivas,
    Resaltar,
    NbaPlayers
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
