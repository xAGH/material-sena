import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: false,
})
export class App {
  name = 'Alejo';
  edad = 18;

  texto = '';

  check = true;

  tipoInput = 'number';

  onClick() {
    this.texto = 'clear';
  }

  onMouseEnter() {
    console.log('El mouse entró');
  }

  onMouseLeave() {
    console.log('El mouse salió');
  }
}
