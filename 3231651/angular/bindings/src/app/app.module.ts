import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CounterButtonComponent } from './components/counter-button/counter-button.component';
import { CounterComponent } from './components/counter/counter.component';
import { ColorButtonComponent } from './example/color-button/color-button.component';
import { ContainerComponent } from './example/container/container.component';
import { SquareComponent } from './example/square/square.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonComponent,
    ColorButtonComponent,
    SquareComponent,
    ContainerComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
