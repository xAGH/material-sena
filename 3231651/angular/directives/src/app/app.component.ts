import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isAuth = true;

  users = [
    { name: 'Alejo', age: 23 },
    { name: 'Pepe', age: 50 },
    { name: 'Juan', age: 18 },
    { name: 'Sutano', age: 30 },
  ];

  day = 'Lunes';
}
