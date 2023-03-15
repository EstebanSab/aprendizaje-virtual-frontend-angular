import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseApiService } from 'src/app/apiRestServices/course-api.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authentication:AuthenticationService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authentication.getToken();
    let cloned;
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
