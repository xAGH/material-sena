import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Pipe } from './components/pipe/pipe';
import { Highlighting } from './directives/highlighting';

@NgModule({
  declarations: [Pipe, Highlighting],
  imports: [CommonModule],
  exports: [Pipe],
})
export class SharedModule {}
