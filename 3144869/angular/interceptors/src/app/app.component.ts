import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users: User[] = [];

  constructor(private userService: UserService) {}

  login() {
    const authToken = 'Auth';
    const refreshToken = 'Refresh';

    localStorage.setItem('authToken', authToken);
    localStorage.setItem('refreshToken', refreshToken);
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
      },
    });
  }
}
