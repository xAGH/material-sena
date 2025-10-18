import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: false,
  templateUrl: './contador.html',
  styleUrl: './contador.scss'
})
export class Contador {
  numero = 0;

  incrementar() {
    this.numero++;
  }

  decrementar() {
    this.numero--;
  }
}
