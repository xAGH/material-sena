import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = new HttpHeaders()
    headers = headers.set("Authorization", "Este es el token de auth")
    const modifiedReq = req.clone({ headers });
    console.log("OKK")
    return next.handle(modifiedReq);
  }
}
