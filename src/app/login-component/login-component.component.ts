import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  acno=""
  pwd=""
  aim="Welcome to SBL"
  acNumber="Account Number Please"
  
  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]],
    pwd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*'),Validators.minLength(4)]]
  })

  constructor(private router:Router,private ds:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  // accountNumber(event:any){
  //   this.acno=event.target.value
  // }
  // password(event:any){
  //   this.pwd=event.target.value
  // }
  login(){

    if(this.loginForm.valid){
      var uname=this.loginForm.value.acno;
      var password=this.loginForm.value.pwd;
  
      var LogInResult=this.ds.login(uname,password)
      console.log(LogInResult);
      
      if(LogInResult==1){
            alert("Login success")
            this.router.navigateByUrl("dashboard")
      }
      else if(LogInResult==-1){
        alert("Invalid Passsword")
      }
      else{
        alert("Invalid User")
      }
    }
    else{
      alert("Invalid Form")
    }
    
  }
  // login(){
  //   var acno=this.acno;
  //   var pwd=this.pwd;
  //   console.log(acno,pwd);
    
  //   let accDetails=this.ds.users;
  //   if(acno in accDetails){
  //       if(pwd == accDetails[acno]["password"]){
  //         alert("Login success")
  //         this.router.navigateByUrl("dashboard")
  //       }
  //       else{
  //         alert("Invalid  password")
  //       }
  //   }
  //   else{
  //     alert("Invalid user")
  //   }
  // }
}
