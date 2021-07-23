import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users:any = {
    1001:{ acno:1001, username:"Vasif", password:"12345", balance:5000},
    1002:{ acno:1002, username:"basil", password:"basil", balance:50000},
    1003:{ acno:1003, username:"sabith", password:"sabith", balance:1000}
  }

  constructor() { }
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
        return true;
      }
  }
}
