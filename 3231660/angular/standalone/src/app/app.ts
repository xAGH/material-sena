import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Carrito } from './features/productos/components/carrito/carrito';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Carrito],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = signal('Standalone');
  private http = inject(HttpClient);
  protected items = [1, 2, 3, 4, 5, 6, 7];

  onClick() {
    this.title.update((actual) => 'Nuevo ' + actual);
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (data) => console.log(data),
    });
  }
}
