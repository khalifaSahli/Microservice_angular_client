import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'app/service/authService/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate  {
  connect:Boolean=false
  constructor ( private authService :AuthService, private router:Router){
   this.Connected()

  }
  
  canActivate() {
    if (this.connect){
      return true;
    }
    else
    {
      this.router.navigateByUrl('/login')
      
    }
  }


  Connected=()=>{
    this.authService.isLoggedIn$.subscribe(data=>{
    this.connect=data
    })
  }
  
}
