import { Component, inject, signal } from '@angular/core';
import { ErrorMessage } from '../../../../shared/components/error-message/error-message';
import { Loading } from '../../../../shared/components/loading/loading';
import { Product } from '../../../../shared/models/product.model';
import { ProductCard } from '../../components/product-card/product-card';
import { Products } from '../../services/products';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, Loading, ErrorMessage],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  private readonly productsService = inject(Products);

  protected readonly products = signal<Product[]>([]);
  protected readonly loading = signal(true);
  protected readonly error = signal<string | null>(null);

  constructor() {
    this.productsService.getAll().subscribe({
      next: ({ products }) => {
        this.products.set(products);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se pudieron cargar los productos');
        this.loading.set(false);
      },
    });
  }
}
