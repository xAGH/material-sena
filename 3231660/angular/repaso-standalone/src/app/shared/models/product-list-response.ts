import { Product } from './product';

export interface ProductListResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
