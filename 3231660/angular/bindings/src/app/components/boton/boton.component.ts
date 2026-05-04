import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.scss',
})
export class BotonComponent {
  @Input() textoInput = '';
  @Input() ficha660 = '';

  @Output() botonClick = new EventEmitter();

  onClick() {
    this.botonClick.emit();
  }
}
