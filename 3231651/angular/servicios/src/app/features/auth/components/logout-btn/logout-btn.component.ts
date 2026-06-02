import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logout-btn',
  standalone: false,
  templateUrl: './logout-btn.component.html',
  styleUrl: './logout-btn.component.scss',
})
export class LogoutBtnComponent {
  constructor(private authService: AuthService) {}

  onClick() {
    this.authService.logout();
  }
}
