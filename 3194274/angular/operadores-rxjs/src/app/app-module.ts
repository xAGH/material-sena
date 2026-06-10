import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { Map } from './components/map/map';
import { Of } from './components/of/of';

@NgModule({
  declarations: [App, Of, Map],
  imports: [BrowserModule, HttpClientModule],
  providers: [provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection()],
  bootstrap: [App],
})
export class AppModule {}
