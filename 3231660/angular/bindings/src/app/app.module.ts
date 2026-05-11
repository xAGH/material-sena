import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotonComponent } from './components/boton/boton.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CalculatorButtonComponent } from './components/calculator-button/calculator-button.component';
import { CalculatorDisplayComponent } from './components/calculator-display/calculator-display.component';
import { ColorButtonComponent } from './components/color-button/color-button.component';
import { SquareComponent } from './components/square/square.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [AppComponent, BotonComponent, CalculatorComponent, CalculatorButtonComponent, CalculatorDisplayComponent, ColorButtonComponent, SquareComponent, MainComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
