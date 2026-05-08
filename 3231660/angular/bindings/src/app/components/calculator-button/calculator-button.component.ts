import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.scss',
})
export class CalculatorButtonComponent {
  @Input() text: string = '';
  @Input() isDisabled: boolean = false;

  @Output() send = new EventEmitter<string>();

  onClick() {
    this.send.emit(this.text);
  }
}
