import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.scss',
})
export class Carrito {
  precioProducto = 10000;

  cantidadProductos = signal(0);

  total = computed(() => {
    return this.cantidadProductos() * this.precioProducto;
  });

  constructor() {
    effect(() => {
      console.log(`Hay ${this.cantidadProductos()} productos. Total: $${this.total()}`);
    });
  }

  agregarProducto() {
    this.cantidadProductos.update((valor) => valor + 1);
  }
}
