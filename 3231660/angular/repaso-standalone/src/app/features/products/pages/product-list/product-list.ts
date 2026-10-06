import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../../shared/components/navbar/navbar';
import { Product } from '../../../../shared/models/product';
import { Products } from '../../services/products';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink, Navbar],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {
  private readonly productsService = inject(Products);

  protected readonly products = signal<Product[]>([]);
  protected readonly total = signal(0);
  protected readonly loading = signal(true);
  protected readonly error = signal<string | null>(null);

  ngOnInit() {
    this.productsService.getAll().subscribe({
      next: (res) => {
        this.products.set(res.products);
        this.total.set(res.total);
        this.loading.set(false);
      },
      error: (err: HttpErrorResponse) => {
        this.error.set(err.error?.message ?? 'No se pudieron cargar los productos');
        this.loading.set(false);
      },
    });
  }
}
