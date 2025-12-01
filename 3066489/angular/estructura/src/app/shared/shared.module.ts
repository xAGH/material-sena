import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';

const components = [
    InputComponent,
    ButtonComponent
]


@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
