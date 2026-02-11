import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Output() escribir: EventEmitter<string> = new EventEmitter();

  onInput(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    this.escribir.emit(text);
  }
}
