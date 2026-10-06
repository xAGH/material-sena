import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../../shared/components/navbar/navbar';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, Navbar],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  // DUMMY: remover y reemplazar por el producto obtenido por id
  protected readonly product = {
    id: 1,
    title: 'Essence Mascara Lash Princess',
    description:
      'Máscara de pestañas de uso popular con efecto volumen y longitud. Fórmula de larga duración y acabado intenso.',
    category: 'beauty',
    brand: 'Essence',
    price: 9.99,
    discountPercentage: 7.17,
    rating: 4.94,
    stock: 5,
    sku: 'BEA-ESS-ESS-001',
    tags: ['beauty', 'mascara'],
    images: [
      'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
    ],
    thumbnail:
      'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
    reviews: [
      {
        reviewerName: 'Eleanor Collins',
        rating: 3,
        comment: 'Would not buy again!',
        date: '2025-04-30',
      },
      {
        reviewerName: 'Lucas Gordon',
        rating: 4,
        comment: 'Very satisfied!',
        date: '2025-04-30',
      },
    ],
  };
}
