import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
})
export class ContadorComponent {
  contador = 0;

  incrementar() {
    this.contador += 1;
  }

  decrementar() {
    this.contador -= 1;
  }

  reset() {
    this.contador = 0;
  }
}
