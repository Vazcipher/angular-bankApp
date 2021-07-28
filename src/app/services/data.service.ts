import { JsonPipe } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser=""

  users:any = {
    1001:{ acno:1001, username:"Vasif", password:"12345", balance:5000},
    1002:{ acno:1002, username:"basil", password:"basil", balance:50000},
    1003:{ acno:1003, username:"sabith", password:"sabith", balance:1000}
  }

  constructor() {
    this.getDetails()
   }

  saveDetails(){
    localStorage.setItem("users",JSON.stringify(this.users))

    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
  }

  getDetails(){
    this.users=JSON.parse(localStorage.getItem("users")||"")

    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser")||"")
    }
  }

  login(acno:any,pwd:any){
    let userDetails=this.users
    if(acno in userDetails){
      if(pwd==userDetails[acno]["password"]){
         this.currentUser=userDetails[acno]["username"]
         this.saveDetails()
         return 1
      }
      else{
        return -1
      }
    }
    else{
      return 0;
    }
  }

  register(acno:any,username:any,password:any){
      let accDetails=this.users;
      if(acno in accDetails){
        return false
      }
      else{
        accDetails[acno]={
          acno,
          username,
          password,
          balance:0
        }
        this.saveDetails()
        return true;
      
      }
  }

  deposit(acno:any,password:any,amount:any){
    let accDetails=this.users
    var amt=parseInt(amount)
    if(acno in accDetails){
      if(password == accDetails[acno]["password"]){
        accDetails[acno]["balance"]+=amt
        this.saveDetails()
        return accDetails[acno]["balance"];
      }
      else{
      alert("Invalid Password")
      }
    }
    else{
      alert("User not found")
    }
  }

  withdrawal(acno:any,pwd:any,amount:any){
    let accDetails=this.users
    var amt=parseInt(amount);
    if(acno in accDetails){
      if(pwd==accDetails[acno]["password"]){
        if(accDetails[acno]["balance"]<amt){
          alert("Insufficient balance")
        }
        else{
          accDetails[acno]["balance"]-=amt
          this.saveDetails()
          return accDetails[acno]["balance"]
        }
      }
      else{
        alert("Invalid Password")
        return false
      }
    }
    else{
      alert("Invalid user")
      return false
    }
  }
}
