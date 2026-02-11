import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.scss',
})
export class ContadorComponent {
  counter = 0;
  numeros = [1, 2, 3, 4, 5, 6];

  incrementar() {
    this.counter++;
  }

  decrementar() {
    this.counter--;
  }

  resetear() {
    this.counter = 0;
  }
}
