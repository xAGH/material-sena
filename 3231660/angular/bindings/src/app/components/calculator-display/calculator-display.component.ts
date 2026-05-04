import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-display',
  templateUrl: './calculator-display.component.html',
  styleUrl: './calculator-display.component.scss',
})
export class CalculatorDisplayComponent {
  @Input() text = 0;
}
