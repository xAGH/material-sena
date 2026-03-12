import { Component } from '@angular/core';
import { Product } from './interfaces/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  products: Product[] = [];

  onProductCreated(product: Product) {
    this.products.push(product);
    console.log(this.products);
  }
}
