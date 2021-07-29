import { JsonPipe } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser=""
  currentAcc=""
  currentBalance=""

  users:any = {
    1001:{ acno:1001, username:"Vasif", password:"12345", balance:5000,transaction:[]},
    1002:{ acno:1002, username:"basil", password:"basil", balance:50000,transaction:[]},
    1003:{ acno:1003, username:"sabith", password:"sabith", balance:1000,transaction:[]}
  }

  constructor() {
    this.getDetails()
   }

  saveDetails(){
    localStorage.setItem("users",JSON.stringify(this.users))

    if(this.currentAcc){
      localStorage.setItem("currentAcc",JSON.stringify(this.currentAcc))
    }

    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
    // if(this.currentBalance){
    //   localStorage.setItem("currentBalance",JSON.stringify(this.currentBalance))
    // }
  }

  getDetails(){
    if(localStorage.getItem("users")){
      this.users=JSON.parse(localStorage.getItem("users")||"")
    }

    if(localStorage.getItem("currentAcc")){
      this.currentAcc=JSON.parse(localStorage.getItem("currentAcc")||"")
    }

    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser")||"")
    }
    // if(localStorage.getItem("currentBalance")){
    //   this.currentUser=JSON.parse(localStorage.getItem("currentBalance")||"")
    // }
  }

  getTransaction(){
    // let balance=this.users[this.currentUser]["balance"]
    return this.users[this.currentAcc].transaction
  }

  login(acno:any,pwd:any){
    let userDetails=this.users
    if(acno in userDetails){
      if(pwd==userDetails[acno]["password"]){
         this.currentUser=userDetails[acno]["username"]
         this.getTransaction()
         this.currentAcc=acno
         this.currentBalance=userDetails[acno]["balance"]
         this.saveDetails()
         console.log(this.currentUser);
         
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
          balance:0,
          transaction:[]
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
        accDetails[acno].transaction.push({
          amount:amt,
          type:"CREDIT"
        })
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
          accDetails[acno].transaction.push({
            amount:amt,
            type:"DEBIT"
          })
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
