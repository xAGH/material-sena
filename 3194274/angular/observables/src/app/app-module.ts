import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { PhotoModule } from './features/photo/photos-module';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, PhotoModule],
  providers: [provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection()],
  bootstrap: [App],
})
export class AppModule {}
