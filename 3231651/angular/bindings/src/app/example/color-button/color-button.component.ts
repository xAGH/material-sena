import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-color-button',
  standalone: false,
  templateUrl: './color-button.component.html',
  styleUrl: './color-button.component.scss',
})
export class ColorButtonComponent {
  @Input() color: string = '';
  @Input() colorCode: string = '';

  @Output() changeColor = new EventEmitter<string>();

  onClick() {
    this.changeColor.emit(this.colorCode);
  }
}
