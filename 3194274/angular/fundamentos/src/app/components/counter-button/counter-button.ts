import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  standalone: false,
  templateUrl: './counter-button.html',
  styleUrl: './counter-button.scss',
})
export class CounterButton {
  @Input() text = '';
  @Output() buttonClicked = new EventEmitter<number>();

  onClick(evento: any) {
    console.log(evento);
    this.buttonClicked.emit(10);
  }
}
