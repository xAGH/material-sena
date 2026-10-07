import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, switchMap, throwError } from 'rxjs';
import { Auth } from '../services/auth';
import { TokenStorage } from '../services/token-storage';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(Auth);
  const router = inject(Router);
  const tokenStorage = inject(TokenStorage);
  const token = tokenStorage.getAccessToken();

  const reqClone = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(reqClone).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status !== 401) {
        return throwError(() => err);
      }

      return auth.refreshTokens().pipe(
        switchMap((data) =>
          next(
            req.clone({
              setHeaders: {
                Authorization: `Bearer ${data.accessToken}`,
              },
            }),
          ),
        ),
        catchError((err: HttpErrorResponse) => {
          return throwError(() => {
            router.navigate(['/login']);
            return err;
          });
        }),
      );
    }),
  );
};
