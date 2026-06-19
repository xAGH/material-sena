import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './features/user/models/user.model';
import { UserService } from './features/user/services/user.service';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  users$: Observable<User[]> = of([]);

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }
}
