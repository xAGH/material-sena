import { Routes } from '@angular/router';
import { ProductDetail } from './pages/product-detail/product-detail';
import { ProductList } from './pages/product-list/product-list';

export const PRODUCTS_ROUTES: Routes = [
  { path: '', component: ProductList },
  { path: ':id', component: ProductDetail },
];
