import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LoginRequest } from '../../models/LoginRequest';
import { LoginService } from '../loginService/login.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
    constructor( private LoginService:LoginService, private router :Router) 
  {
    const token=localStorage.getItem('token')
    this._isLoggedIn$.next(!!token)
  }
  
 

  login(form:LoginRequest) {
    return this.LoginService.LoginApi(form).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('token', response.token);
        if(response.user.isAdmin==1)
        this.router.navigate(['admin']);
        else{
          this.router.navigate(['user']);
        }
      })
      
    );
    
  }

  logout() {
   
        this._isLoggedIn$.next(false);
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
  }
}
