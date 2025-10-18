import { Component } from '@angular/core';
import { Producto } from '../types/prouduct';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-directivas',
  standalone: false,
  templateUrl: './directivas.html',
  styleUrl: './directivas.scss',
})
export class Directivas {
  productos: Producto[];

  constructor(private productService: ProductService) {
    this.productos = productService.productos;
  }

  agregar() {
    this.productService.agregar();
  }

  eliminar(idx: number) {
    this.productService.eliminar(idx);
  }
}
