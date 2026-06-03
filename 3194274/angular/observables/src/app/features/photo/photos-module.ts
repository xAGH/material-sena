import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PhotoCard } from './components/photo-card/photo-card';
import { PhotoList } from './pages/photo-list/photo-list';

@NgModule({
  declarations: [PhotoCard, PhotoList],
  imports: [CommonModule, HttpClientModule],
  exports: [PhotoList],
})
export class PhotoModule {}
