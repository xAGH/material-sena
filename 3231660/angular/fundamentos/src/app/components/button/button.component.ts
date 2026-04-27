import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  // Propiedades de entrada = propiedades
  @Input() text = '';
  // Propiedades de salida = eventos
  @Output() buttonClick = new EventEmitter();

  onClick() {
    console.log('Se dio click');
    this.buttonClick.emit();
  }
}
