import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-color-button',
  templateUrl: './color-button.component.html',
  styleUrl: './color-button.component.scss',
})
export class ColorButtonComponent {
  @Input() color = '';
  @Input() text = '';
  @Output() changeColor = new EventEmitter<string>();

  onClick() {
    this.changeColor.emit(this.color);
  }
}
