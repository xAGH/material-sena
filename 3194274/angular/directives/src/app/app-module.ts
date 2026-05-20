import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { App } from './app';
import { NgFor } from './components/ng-for/ng-for';
import { NgIf } from './components/ng-if/ng-if';
import { NgSwitch } from './components/ng-switch/ng-switch';

@NgModule({
  declarations: [App, NgIf, NgFor, NgSwitch],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
