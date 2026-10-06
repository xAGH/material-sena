import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Auth } from '../auth/auth';
import { TokenStorage } from '../auth/token-storage';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(Auth);
  const tokenStorage = inject(TokenStorage);

  const accessToken = tokenStorage.accessToken;

  const reqClone = req.clone({
    setHeaders: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return next(reqClone);
};
