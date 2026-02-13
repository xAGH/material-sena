import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  counter = 0;

  increment(): void {
    this.counter += 1;
  }

  decrement(): void {
    this.counter -= 1;
  }

  reset(): void {
    this.counter = 0;
  }
}
