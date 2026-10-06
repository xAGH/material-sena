import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../../core/config/api.config';
import { Product, ProductsResponse } from '../../../shared/models/product.model';

/** Usa los endpoints protegidos (/auth/products), que requieren Bearer token. */
@Injectable({ providedIn: 'root' })
export class Products {
  private readonly http = inject(HttpClient);

  getAll(limit = 20, skip = 0): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(`${API_URL}/auth/products`, {
      params: { limit, skip },
    });
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/auth/products/${id}`);
  }
}
