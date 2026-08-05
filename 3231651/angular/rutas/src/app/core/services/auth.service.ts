import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'token';

  login() {
    // Token simulado: en una API real vendría en la respuesta del backend
    localStorage.setItem(this.TOKEN_KEY, 'fake-jwt-token-123');
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  get token(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthenticated(): boolean {
    return this.token !== null;
  }
}
