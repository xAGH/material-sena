import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent {
  price: number = 0;
  name: string = '';
  @Input() title = '';

  constructor(private productService: ProductService) {}

  emitProductCreated() {
    const product: Product = {
      id: Date.now(), // Epoch, tiempo en milisegundos
      name: this.name,
      price: this.price,
    };

    this.productService.addProduct(product);

    this.name = '';
    this.price = 0;
  }
}
