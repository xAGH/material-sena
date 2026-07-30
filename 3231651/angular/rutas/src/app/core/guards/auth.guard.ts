import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuth = localStorage.getItem('token');
  const router = inject(Router);

  if (isAuth === 'true') {
    return true;
  }

  return router.parseUrl('/auth/login');
};
