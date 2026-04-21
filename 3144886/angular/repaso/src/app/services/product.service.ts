import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _products: Product[] = [];

  addProduct(product: Product) {
    this._products.push(product);
  }

  get products() {
    return this._products;
  }
}
