import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent {
  price: number = 0;
  name: string = '';
  @Input() title = '';

  @Output() productCreated = new EventEmitter<Product>();

  emitProductCreated() {
    const product: Product = {
      id: Date.now(), // Epoch, tiempo en milisegundos
      name: this.name,
      price: this.price,
    };

    this.productCreated.emit(product);

    this.name = '';
    this.price = 0;
  }
}
