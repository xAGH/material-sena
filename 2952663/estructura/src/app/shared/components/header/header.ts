import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth-service';

@Component({
  selector: 'app-header',
  template: `
    <header
      style="display:flex; justify-content:space-between; background:#007BFF; color:white; padding:1rem;"
    >
      <span>Mini App</span>
      <nav>
        <a routerLink="/" style="cursor:pointer;color:white; margin-right:1rem;">Home</a>
        <a routerLink="/dashboard" style="cursor:pointer;color:white; margin-right:1rem;"
          >Dashboard</a
        >
        <button
          *ngIf="!auth.isLoggedIn()"
          (click)="login()"
          style="background:#28a745; color:white; border:none; padding:0.5rem 1rem;"
        >
          Login
        </button>
        <button
          *ngIf="auth.isLoggedIn()"
          (click)="logout()"
          style="background:#dc3545; color:white; border:none; padding:0.5rem 1rem;"
        >
          Logout
        </button>
      </nav>
    </header>
  `,
  standalone: false,
})
export class HeaderComponent {
  constructor(public auth: AuthService, private router: Router) {}
  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
