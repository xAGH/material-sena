import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenStorage } from '../services/token-storage';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenStorage = inject(TokenStorage);
  const token = tokenStorage.getAccessToken();

  const reqClone = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(reqClone);
};
