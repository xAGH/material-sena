import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipeComponent } from './components/pipe/pipe.component';



@NgModule({
  declarations: [
    PipeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PipeComponent]
})
export class SharedModule { }
