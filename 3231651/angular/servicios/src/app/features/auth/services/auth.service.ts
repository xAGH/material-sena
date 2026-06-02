import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user = 'Alejo';
  private password = '123456';

  isAuth = false;

  login(user: string, password: string) {
    const userMatch = this.user === user;
    const passwordMatch = this.password === password;

    this.isAuth = userMatch && passwordMatch;
  }

  logout() {
    this.isAuth = false;
  }
}
