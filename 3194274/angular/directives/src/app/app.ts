import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: false,
})
export class App {
  isAuthenticated = false;

  users: { name: string }[] = [
    { name: 'Alejo' },
    { name: 'Pepe' },
    { name: 'Maik' },
    { name: 'Alejo' },
    { name: 'Pepe' },
    { name: 'Maik' },
  ];

  toggle() {
    setTimeout(() => {
      this.isAuthenticated = !this.isAuthenticated;
    }, 2000);
  }
}
