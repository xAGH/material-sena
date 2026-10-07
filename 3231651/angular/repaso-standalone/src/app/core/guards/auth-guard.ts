import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';
import { TokenStorage } from '../services/token-storage';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const tokenStorage = inject(TokenStorage);
  const router = inject(Router);
  const token = tokenStorage.getAccessToken();

  if (token === null) {
    return router.navigate(['/login']);
  }

  if (!auth.isAuthenticated()) {
    auth.getCurrentUser().subscribe();
  }

  return true;
};
