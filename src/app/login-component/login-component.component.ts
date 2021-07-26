import { Component, OnInit } from '@angular/core';
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
  

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  // accountNumber(event:any){
  //   this.acno=event.target.value
  // }
  // password(event:any){
  //   this.pwd=event.target.value
  // }
  login(){
    var uname=this.acno;
    var password=this.pwd;

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
