import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLogged = false;

  logIn() {
    this._isLogged = true;
  }

  logOut() {
    this._isLogged = false;
  }

  get isLogged() {
    return this._isLogged;
  }
}
