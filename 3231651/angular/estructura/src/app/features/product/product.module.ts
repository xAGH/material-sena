import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

@NgModule({
  declarations: [ProductListComponent, ProductCardComponent],
  imports: [CommonModule],
  exports: [ProductListComponent],
})
export class ProductModule {}
