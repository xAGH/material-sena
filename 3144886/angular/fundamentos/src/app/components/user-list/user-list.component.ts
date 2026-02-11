import { Component } from '@angular/core';
import { User } from '../../interfaces/User.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  users: User[] = [
    {
      id: 1,
      name: 'Alejo Pérez',
      age: 28,
      email: 'alejo.perez@example.com',
      document: '1001234567',
    },
    {
      id: 2,
      name: 'María Gómez',
      age: 24,
      email: 'maria.gomez@example.com',
      document: '1009876543',
    },
    {
      id: 3,
      name: 'Carlos Rodríguez',
      age: 30,
      email: 'carlos.rodriguez@example.com',
      document: '1011122233',
    },
    {
      id: 4,
      name: 'Laura Martínez',
      age: 26,
      email: 'laura.martinez@example.com',
      document: '1098765432',
    },
  ];
}
