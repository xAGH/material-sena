import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Entró al interceptor');

  const auth = localStorage.getItem('authToken');
  const headers = new HttpHeaders();

  headers.append('Authorization', 'Bearer ' + auth);

  const newReq = req.clone({
    headers,
  });

  return next(newReq);
};
