import { CommonServiceService } from './../common-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Login } from 'src/model/login-form';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  hide = true;
  loginForm:Login;
  userName = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private cs:CommonServiceService,private route:Router)
  {

  }

  ngOnInit(): void {
    
  }
  onSubmit()
  {
    this.cs.getLoginData().subscribe({
      next:(data)=>{
        this.loginForm=data;
      }
    });
    //console.log(this.loginForm.userName)
    
     console.log(this.userName.value);
     console.log(this.password.value);
     if(this.userName.value=="ranisangale" && this.password.value=="rani123")
     {
      this.route.navigate(["dashboard"]);
     }
     else
     {
      alert("invalid login details");
     }
  }
}
