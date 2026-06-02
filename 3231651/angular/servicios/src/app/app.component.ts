import { Component } from '@angular/core';
import { AuthService } from './features/auth/services/auth.service';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  get isAuth() {
    return this.authService.isAuth;
  }
}
