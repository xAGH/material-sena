import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from './interfaces/user.interface';
import { UserService } from './services/user.service';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  private _users: User[] = [];
  private subscription: Subscription;

  get users() {
    return this._users;
  }

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.subscription = this.userService
      .getUsers()
      .pipe(
        map((userList) => {
          return userList.map((user) => {
            return {
              id: user.id,
              name: user.name,
              username: user.username,
              email: user.email,
              address: {
                street: user.address.street,
                suite: user.address.suite,
                city: user.address.city,
                zipcode: user.address.zipcode,
              },
              phone: user.phone,
              website: user.website,
            };
          });
        }),
      )
      .subscribe({
        next: (data: User[]) => {
          console.log(data);
          this._users = data;
        },
        error: () => {},
        complete: () => {},
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  // constructor(private authService: AuthService) {}
  // login() {
  //   this.authService.login();
  // }
  // logout() {
  //   this.authService.logout();
  // }
  // get loggedIn() {
  //   return this.authService.loggedId;
  // }
}
