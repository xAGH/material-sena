import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: false,
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent {
  currentColor = '#FFFFFF';
  colorName = 'Blanco';

  onChangeColor(colorCode: string, colorName: string) {
    console.log(colorCode);
    this.currentColor = colorCode;
    this.colorName = colorName;
  }

  onClick(evento: any) {
    console.log(evento);
  }
}
