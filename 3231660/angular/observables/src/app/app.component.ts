import { Component, OnInit } from '@angular/core';
import { User } from './features/user/models/user.model';
import { UserService } from './features/user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  users: User[] = [];
  isLoading = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
      },
      error: () => {},
      complete: () => {},
    });
  }
}
