import { HttpClient } from '@angular/common/http';
import { computed, inject, Service, signal } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { LoginRequest } from '../../shared/models/login-request';
import { LoginResponse } from '../../shared/models/login-response';
import { User } from '../../shared/models/user';
import { API_URL } from '../config/api.config';
import { TokenStorage } from './token-storage';

@Service()
export class Auth {
  private readonly tokenStorage = inject(TokenStorage);
  private readonly http = inject(HttpClient);

  private _user = signal<User | null>(null);
  isAuthenticated = computed(() => this._user() !== null);

  user = this._user.asReadonly();

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${API_URL}/auth/login`, credentials).pipe(
      tap((data) => {
        const { accessToken, refreshToken, ...user } = data;
        this.tokenStorage.saveTokens(accessToken, refreshToken);
        this._user.set(user);
      }),
    );
  }

  restoreSession(): Observable<boolean> {
    if (this.isAuthenticated()) {
      return of(true);
    }
    if (!this.tokenStorage.accessToken) {
      return of(false);
    }
    return this.http.get<User>(`${API_URL}/auth/me`).pipe(
      tap((user) => this._user.set(user)),
      map(() => true),
      catchError(() => {
        this.tokenStorage.clearTokens();
        return of(false);
      }),
    );
  }

  logout(): void {
    this.tokenStorage.clearTokens();
    this._user.set(null);
  }
}
