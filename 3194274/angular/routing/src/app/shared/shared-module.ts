import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Error404 } from './pages/error404/error404';

@NgModule({
  declarations: [Error404],
  imports: [CommonModule],
  exports: [Error404],
})
export class SharedModule {}
