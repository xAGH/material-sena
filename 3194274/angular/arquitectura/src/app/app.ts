import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: false,
})
export class App {
  user = 'alejo';
  password = '123456';
  isAuth = false;

  login(datos: { user: string; password: string }) {
    const userMatch = this.user === datos.user;
    const passwordMatch = this.password === datos.password;

    this.isAuth = userMatch && passwordMatch;
  }
}
