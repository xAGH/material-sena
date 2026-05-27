import { Component } from '@angular/core';
import { AuthService } from './core/services/auth';
import { User } from './features/user/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: false,
})
export class App {
  constructor(private authService: AuthService) {}

  get isAuth() {
    return this.authService.isAuth;
  }

  users: User[] = [
    {
      name: 'Laura Gómez',
      email: 'laura.gomez@email.com',
    },
    {
      name: 'Carlos Rodríguez',
      email: 'carlos.rodriguez@email.com',
    },
    {
      name: 'Andrea Martínez',
      email: 'andrea.martinez@email.com',
    },
    {
      name: 'Juan Pérez',
      email: 'juan.perez@email.com',
    },
    {
      name: 'Sofía Ramírez',
      email: 'sofia.ramirez@email.com',
    },
    {
      name: 'Miguel Torres',
      email: 'miguel.torres@email.com',
    },
    {
      name: 'Valentina Castro',
      email: 'valentina.castro@email.com',
    },
  ];
}
