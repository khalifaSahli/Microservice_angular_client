import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm=new FormGroup({
        userName: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
    })

    data : Date = new Date();
    focus;
    focus1;

    

    constructor(private authService: AuthService, private router: Router) { }


    login() {
        if (this.loginForm.invalid) {
        return;
        }
        this.authService
        .login(this.loginForm.value)
        .subscribe();
      }





      ngOnInit() {
    //     var body = document.getElementsByTagName('body')[0];
    //     body.classList.add('login-page');

    //     var navbar = document.getElementsByTagName('nav')[0];
    //     navbar.classList.add('navbar-transparent');
   
    }
    ngOnDestroy(){
        // var body = document.getElementsByTagName('body')[0];
        // body.classList.remove('login-page');

        // var navbar = document.getElementsByTagName('nav')[0];
        // navbar.classList.remove('navbar-transparent');
    }


}
