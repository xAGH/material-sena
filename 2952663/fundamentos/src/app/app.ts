import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {

  textoInput: string;

  mostrarTexto() {
    console.log(this.textoInput);
  }

  cambiarTexto() {
    this.textoInput = "texto cambiado"
  }

}
