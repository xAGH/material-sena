import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss',
})
export class ActionButtonComponent {
  @Input() text: string = '';
  @Input() backgroundColor: string = '';

  @Output() action: EventEmitter<void> = new EventEmitter();

  onClick() {
    this.action.emit();
  }
}

/* type PedidoPizzeria<T> = {
  order: string,
  time: number,
  notificacion: T
}

const pedido: PedidoPizzeria<string> = {
  order: "Peperonni",
  time: 30,
  notificacion: "Termino la pizza"
}


const pedido2: PedidoPizzeria<number> = {
  order: "Peperonni",
  time: 30,
  notificacion: 1
}
 */
