import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from 'app/service/authService/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
 
  connect:Boolean=false
  constructor ( private authService :AuthService, private router:Router){
   this.Connected()

  }
  
  canActivate() {
    if (this.connect){
    
      this.router.navigateByUrl('/home')
    }
    else
    {
      return true
      
    }
  }


  Connected=()=>{
    this.authService.isLoggedIn$.subscribe(data=>{
    this.connect=data
    })
  }
  
}
