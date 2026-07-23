import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductList } from './pages/product-list/product-list';
import { ProductsRoutingModule } from './products-routing-module';

@NgModule({
  declarations: [ProductList],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
