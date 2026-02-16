import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.scss',
})
export class CounterDisplayComponent {
  @Input() text: number = 0;
}
