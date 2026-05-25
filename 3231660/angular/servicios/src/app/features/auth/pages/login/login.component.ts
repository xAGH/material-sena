import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private service: AuthService) {}

  user = '';
  password = '';

  onClick() {
    this.service.login(this.user, this.password);
  }
}
