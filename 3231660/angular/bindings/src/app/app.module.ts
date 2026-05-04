import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotonComponent } from './components/boton/boton.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CalculatorButtonComponent } from './components/calculator-button/calculator-button.component';
import { CalculatorDisplayComponent } from './components/calculator-display/calculator-display.component';

@NgModule({
  declarations: [AppComponent, BotonComponent, CalculatorComponent, CalculatorButtonComponent, CalculatorDisplayComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
