import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../authService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req,next) {
    let authservice=this.injector.get(AuthService)
  let tokenizreq=req.clone({
    setHeaders:{
      Authorization: `Bearer ${authservice.isLoggedIn$}`
    }
  })
  return next.handle(tokenizreq)
  }
}
