import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-completo',
  templateUrl: './ejemplo-completo.component.html',
  styleUrl: './ejemplo-completo.component.scss',
})
export class EjemploCompletoComponent {
  items = ['Angular', 'TypeScript', 'Java'];

  mostrar = false;
  estado = '';

  toggle() {
    if (!this.mostrar) {
      this.estado = 'cargando';
      setTimeout(() => {
        this.mostrar = true;
        this.estado = 'exito';
      }, 2000);
    } else {
      this.estado = '';
      this.mostrar = false;
    }
  }
}
