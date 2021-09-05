import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
const options={
  withCredentials:true
}
@Injectable({
  providedIn: 'root'
})



export class DataService {

  currentUser=""
  currentAcc=""
  currentBalance=""

  constructor(private http:HttpClient) {
    // this.getDetails()
   }

  getTransaction(acno:any){
    const data={
      acno
    }
    return this.http.post("http://localhost:3000/getTransaction",data,options)
  }

  login(acno:any,pwd:any){
    const data={
      acno,pwd
    }
    return this.http.post("http://localhost:3000/login",data,options) 
  }

  register(acno:any,username:any,password:any){

    const data={
      acno,
      username,
      password
    }
    return this.http.post("http://localhost:3000/register",data)
  }

  deposit(acno:any,password:any,amount:any){

    const data={
      acno,
      password,
      amount
    }
    return this.http.post("http://localhost:3000/deposit",data,options)
  }

  withdrawal(acno:any,password:any,amount:any){
    
    const data={
      acno,
      password,
      amount
    }
    return this.http.post("http://localhost:3000/withdrawal",data,options)
  }

  deleteAcc(acno:any){
    return this.http.delete("http://localhost:3000/deleteAcc/"+acno,options)
  }
}
