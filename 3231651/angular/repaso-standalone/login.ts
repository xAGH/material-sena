import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../../../core/services/auth';
import { ErrorMessage } from '../../../../shared/components/error-message/error-message';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ErrorMessage],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly fb = inject(FormBuilder).nonNullable;
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);

  protected readonly loading = signal(false);
  protected readonly error = signal<string | null>(null);

  protected readonly form = this.fb.group({
    username: ['emilys', Validators.required],
    password: ['emilyspass', Validators.required],
  });

  protected submit(): void {
    if (this.form.invalid) return;

    this.loading.set(true);
    this.error.set(null);

    this.auth.login(this.form.getRawValue()).subscribe({
      next: () => this.router.navigate(['/products']),
      error: (err: HttpErrorResponse) => {
        this.error.set(err.error?.message ?? 'No se pudo iniciar sesión');
        this.loading.set(false);
      },
    });
  }
}
