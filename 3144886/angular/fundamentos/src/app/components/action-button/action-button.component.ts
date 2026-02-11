import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss',
})
export class ActionButtonComponent {
  @Input() text: string = '';
  @Input() backgroundColor: string = 'green';
  @Output() action: EventEmitter<void> = new EventEmitter();

  onClick() {
    this.action.emit();
  }
}
