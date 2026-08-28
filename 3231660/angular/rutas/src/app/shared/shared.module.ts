import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';

@NgModule({
  declarations: [HomeComponent, Error404Component],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class SharedModule {}
