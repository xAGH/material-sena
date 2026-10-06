import { CurrencyPipe } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ErrorMessage } from '../../../../shared/components/error-message/error-message';
import { Loading } from '../../../../shared/components/loading/loading';
import { Product } from '../../../../shared/models/product.model';
import { Products } from '../../services/products';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, RouterLink, Loading, ErrorMessage],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  private readonly productsService = inject(Products);

  /** Viene del parámetro de ruta :id (withComponentInputBinding). */
  readonly id = input.required<string>();

  protected readonly product = signal<Product | null>(null);
  protected readonly loading = signal(true);
  protected readonly error = signal<string | null>(null);

  ngOnInit(): void {
    this.productsService.getById(Number(this.id())).subscribe({
      next: (product) => {
        this.product.set(product);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se pudo cargar el producto');
        this.loading.set(false);
      },
    });
  }
}
