import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { Auth } from '../auth/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  return auth
    .restoreSession()
    .pipe(map((isAuthenticated) => isAuthenticated || router.createUrlTree(['/auth/login'])));
};
