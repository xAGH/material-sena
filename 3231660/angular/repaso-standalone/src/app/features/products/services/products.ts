import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../../core/config/api.config';
import { Product } from '../../../shared/models/product';
import { ProductCategory } from '../../../shared/models/product-category';
import { ProductListResponse } from '../../../shared/models/product-list-response';

@Service()
export class Products {
  private readonly http = inject(HttpClient);
  private readonly url = `${API_URL}/auth/products`;

  getAll(limit = 30, skip = 0): Observable<ProductListResponse> {
    const params = new HttpParams().set('limit', limit).set('skip', skip);
    return this.http.get<ProductListResponse>(this.url, { params });
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  search(query: string, limit = 30, skip = 0): Observable<ProductListResponse> {
    const params = new HttpParams().set('q', query).set('limit', limit).set('skip', skip);
    return this.http.get<ProductListResponse>(`${this.url}/search`, { params });
  }

  getCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(`${this.url}/categories`);
  }

  getByCategory(slug: string, limit = 30, skip = 0): Observable<ProductListResponse> {
    const params = new HttpParams().set('limit', limit).set('skip', skip);
    return this.http.get<ProductListResponse>(`${this.url}/category/${slug}`, { params });
  }
}
