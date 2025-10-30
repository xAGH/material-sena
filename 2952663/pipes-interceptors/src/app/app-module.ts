import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { NumberToStringPipe } from './pipes/number-to-string-pipe';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoggingInterceptor } from './interceptors/logging-interceptor';

@NgModule({
  declarations: [
    App,
    NumberToStringPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
  ],
  bootstrap: [App]
})
export class AppModule { }
