import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authenticated = false;

  login() {
    this.authenticated = true;
    localStorage.setItem('authenticated', 'true');
  }

  logout() {
    this.authenticated = false;
    localStorage.clear();
  }

  get isAuthenticated() {
    return this.authenticated;
  }
}
