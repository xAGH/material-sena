import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fundamentos';
  inputType = 'number';
  sugar = '';

  onClick() {
    console.log('Se hizo click');
    console.log('sugar tiene el valor: ', this.sugar);
  }

  onMouseLeave() {
    console.log('Salió el mouse');
  }

  onMouseEnter() {
    console.log('Entró el mouse');
  }
}
