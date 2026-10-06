import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../core/auth/auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);
  protected readonly user = this.auth.user;

  protected logout() {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
