import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.scss',
})
export class CalculatorButtonComponent {
  @Input() text: string = '';

  @Output() send = new EventEmitter();

  onClick() {
    this.send.emit();
  }
}
