import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  constructor(private service: AuthService) {}

  users = [
    {
      name: 'Juan Pérez',
      email: 'juan@gmail.com',
      role: 'Administrador',
    },
    {
      name: 'María Gómez',
      email: 'maria@gmail.com',
      role: 'Instructor',
    },
    {
      name: 'Carlos Ruiz',
      email: 'carlos@gmail.com',
      role: 'Aprendiz',
    },
    {
      name: 'Laura Torres',
      email: 'laura@gmail.com',
      role: 'Aprendiz',
    },
  ];

  onClick() {
    this.service.logout();
  }
}
