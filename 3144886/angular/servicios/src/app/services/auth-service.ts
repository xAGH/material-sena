import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _loggedId = false;

  login() {
    this._loggedId = true;
  }

  logout() {
    this._loggedId = false;
  }

  get loggedId() {
    return this._loggedId;
  }
}
