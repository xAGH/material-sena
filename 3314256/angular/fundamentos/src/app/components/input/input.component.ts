import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  nota: WritableSignal<string> = signal('');

  normal() {
    this.nota.set('Quiero el pedido normal');
  }

  onNotaChange(event: string) {
    console.log('Ejecut el ngModel');
  }
}
