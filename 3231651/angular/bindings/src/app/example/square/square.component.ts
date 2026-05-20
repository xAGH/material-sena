import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: false,
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss',
})
export class SquareComponent {
  @Input() color: string = '#FFFFFF';
}
