import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../../../core/auth/auth';
import { LoginRequest } from '../../../../shared/models/login-request';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly fb = inject(FormBuilder).nonNullable;
  private readonly router = inject(Router);
  private readonly auth = inject(Auth);

  protected readonly form = this.fb.group({
    username: ['emilys', [Validators.required, Validators.minLength(3)]],
    password: ['emilyspass', [Validators.required, Validators.minLength(6)]],
  });

  protected readonly hint = { username: 'emilys', password: 'emilyspass' };
  protected error = '';

  protected onSubmit(): void {
    if (this.form.invalid) {
      console.log(this.form.errors);
      this.form.markAllAsTouched();
      return;
    }
    this.auth.login(this.form.value as LoginRequest).subscribe({
      next: () => {
        this.router.navigate(['/products']);
      },
      error: (err) => {
        this.error = err.error?.message ?? 'Credenciales inválidas';
      },
    });
  }
}
