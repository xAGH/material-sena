import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  user: string;
  password: string;

  constructor(private authService: AuthService) {}

  onClick() {
    console.log(this.authService.isAuth);
    this.authService.login(this.user, this.password);
    console.log(this.authService.isAuth);
  }
}
