import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { API_URL } from '../config/api.config';
import { LoginRequest, LoginResponse, LoginResponseWithUser } from '../models/auth.model';
import { User } from '../models/user.model';
import { TokenStorage } from './token-storage';

@Injectable({ providedIn: 'root' })
export class Auth {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly tokenStorage = inject(TokenStorage);

  private readonly _user = signal<User | null>(null);

  readonly user = this._user.asReadonly();
  readonly isAuthenticated = computed(() => this._user() !== null);

  login(credentials: LoginRequest): Observable<LoginResponseWithUser> {
    // Forzamos a que el token tenga una expiración en 1 minuto
    credentials.expiresInMins = 1;
    return this.http.post<LoginResponseWithUser>(`${API_URL}/auth/login`, credentials).pipe(
      tap(({ accessToken, refreshToken, ...user }) => {
        this.tokenStorage.save(accessToken, refreshToken);
        this._user.set(user);
      }),
    );
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${API_URL}/auth/me`).pipe(tap((user) => this._user.set(user)));
  }

  logout(): void {
    this.tokenStorage.clear();
    this._user.set(null);
    this.router.navigate(['/login']);
  }

  refreshTokens() {
    const body = {
      refreshToken: this.tokenStorage.getRefreshToken(),
      expiresInMins: 5,
    };
    return this.http.post<LoginResponse>(`${API_URL}/auth/refresh`, body).pipe(
      tap((data) => {
        const { accessToken, refreshToken } = data;
        this.tokenStorage.save(accessToken, refreshToken);
      }),
    );
  }
}
