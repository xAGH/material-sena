import { Component, inject, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserInfo } from '../../models/user-info.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  userService = inject(UserService);
  users$: Observable<UserInfo[]> = of([]);

  ngOnInit(): void {
    this.users$ = this.userService.loadUsers();
  }
}
