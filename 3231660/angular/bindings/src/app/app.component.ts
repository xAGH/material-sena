import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  age = 17;

  inputType = 'number';

  max = 100;

  textoInput1 = 'Texto input 1';
  textoInput2 = 'Texto input 2';

  value = 'Ficha660';

  onClick(algo: any) {
    console.log('Click');
    console.log(algo);
  }

  onMouseEnter() {
    console.log('Mouse enter');
  }

  onMouseLeave() {
    console.log('Mouse leave');
  }

  onBotonClick(algo: any) {
    console.log('El componente botón se clickeo', algo);
  }
}
