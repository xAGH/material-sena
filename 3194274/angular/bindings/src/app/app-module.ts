import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { App } from './app';
import { Counter } from './components/counter/counter';
import { CounterButton } from './components/counter-button/counter-button';

@NgModule({
  declarations: [App, Counter, CounterButton],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection()],
  bootstrap: [App],
})
export class AppModule {}
