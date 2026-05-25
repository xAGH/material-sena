import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false;

  private user = 'Alejo';
  private password = '123456';

  login(user: string, password: string) {
    const userMatch = user === this.user;
    const passwordMatch = password === this.password;
    console.log(user, password);
    this.isAuth = userMatch && passwordMatch;
  }

  logout() {
    this.isAuth = false;
  }
}
