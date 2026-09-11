import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // Importamos router-outlet para renderizar el contenido según
  // la ruta actual
  imports: [RouterOutlet],
})
export class AppComponent {}
