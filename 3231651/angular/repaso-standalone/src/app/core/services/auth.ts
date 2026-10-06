import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { API_URL } from '../config/api.config';
import { LoginRequest, LoginResponse } from '../models/auth.model';
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

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${API_URL}/auth/login`, credentials).pipe(
      tap(({ accessToken, refreshToken, ...user }) => {
        this.tokenStorage.save(accessToken, refreshToken);
        this._user.set(user);
      }),
    );
  }

  /** Obtiene el usuario actual a partir del token (requiere Authorization). */
  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${API_URL}/auth/me`).pipe(tap((user) => this._user.set(user)));
  }

  logout(): void {
    this.tokenStorage.clear();
    this._user.set(null);
    this.router.navigate(['/login']);
  }
}
