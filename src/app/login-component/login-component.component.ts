import { Component, OnInit } from '@angular/core';

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
  users:any = {
    1001:{ acno:1001, username:"Vasif", password:"12345", balance:5000},
    1002:{ acno:1002, username:"basil", password:"basil", balance:50000},
    1003:{ acno:1003, username:"sabith", password:"sabith", balance:1000}
  }

  constructor() { }


  login(){
    var acno=this.acno;
    var pwd=this.pwd;

    let accDetails=this.users
    if(acno in accDetails){
        if(pwd == accDetails[acno]["password"]){
          alert("Login success")
        }
        else{
          alert("Invalid  password")
        }
    }
    else{
      alert("Invalid user")
    }
  }

  ngOnInit(): void {
  }
  accountNumber(event:any){
    this.acno=event.target.value
  }
  password(event:any){
    this.pwd=event.target.value
  }
  
}
