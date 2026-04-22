import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

type UserProfile = {
  id: number;
  email: string;
  name: string;
  iat?: number;
  exp?: number;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  email = 'alejo@test.com';
  password = '123456';

  loadingLogin = false;
  loadingProfile = false;

  errorMessage = '';
  successMessage = '';

  profile: UserProfile | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.loadProfile();
    }
  }

  login() {
    this.loadingLogin = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.authService.login(this.email, this.password).subscribe({
      next: (resp) => {
        this.loadingLogin = false;
        this.successMessage = `Bienvenido, ${resp.user.name}`;
        this.loadProfile();
      },
      error: (error) => {
        this.loadingLogin = false;
        this.errorMessage =
          error?.error?.message || 'Error al iniciar sesión';
      },
    });
  }

  loadProfile() {
    this.loadingProfile = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.authService.getProfile().subscribe({
      next: (resp) => {
        this.loadingProfile = false;
        this.profile = resp.user;
      },
      error: (error) => {
        this.loadingProfile = false;
        this.profile = null;

        if (error.status === 401) {
          this.authService.logout();
        }

        this.errorMessage =
          error?.error?.message || 'No se pudo obtener el perfil';
      },
    });
  }

  logout() {
    this.authService.logout();
    this.profile = null;
    this.successMessage = 'Sesión cerrada';
    this.errorMessage = '';
  }
}
