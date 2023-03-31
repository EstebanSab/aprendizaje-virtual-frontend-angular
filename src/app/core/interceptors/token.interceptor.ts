import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    let cloned;



    request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    
    if (token){
     cloned = request.clone({
        headers:request.headers.append('Authorization',`Bearer ${token}`), 
      })
      return next.handle(cloned);
    }
    //cloned = request.clone({
    //  headers:request.headers.append('Access-Control-Allow-Origin',`*`)
    //})
    
    return next.handle(request);
  }
}
