import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { CounterDisplayComponent } from './components/counter-display/counter-display.component';

@NgModule({
  declarations: [AppComponent, ActionButtonComponent, CounterDisplayComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
