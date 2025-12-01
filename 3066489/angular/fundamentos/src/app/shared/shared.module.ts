import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatButtonComponent } from './components/float-button/float-button.component';

@NgModule({
  declarations: [
    FloatButtonComponent
  ],
  exports: [
    FloatButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
