import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  @Input() products: Product[] = [];
}
