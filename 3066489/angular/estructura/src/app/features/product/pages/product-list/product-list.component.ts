import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../../../../shared/models/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  @Input() products: Product[] = [];
  @Output() remove = new EventEmitter<Product>();

  onRemove(product: Product) {
    this.remove.emit(product);
  }
}
