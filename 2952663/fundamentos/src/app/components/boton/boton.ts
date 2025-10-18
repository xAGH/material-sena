import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-boton',
  standalone: false,
  templateUrl: './boton.html',
  styleUrl: './boton.scss'
})
export class Boton {

  @Input() texto: string;
  @Output() actionClick: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    this.actionClick.emit();
  }

}
