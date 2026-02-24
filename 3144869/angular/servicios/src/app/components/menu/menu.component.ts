import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  constructor(private authService: AuthService) {}

  get isLoggedIn() {
    return this.authService.isLogged;
  }
}
