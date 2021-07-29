import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  accno=""
  pwd=""
  amount=""

  accno1=""
  pwd1=""
  amount1=""

  depositForm=this.fb.group({
    accno:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]],
    pwd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*'),Validators.minLength(4)]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]]
  })

  withdrawFrom=this.fb.group({
    accno1:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]],
    pwd1:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*'),Validators.minLength(4)]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]]
  })
  user=this.db.currentUser
  constructor(private db:DataService,private router:Router,private fb:FormBuilder) { }

 
  ngOnInit(): void {
  }
  deposit(){

    if(this.depositForm.valid){
      var acno=this.depositForm.value.accno;
    var password=this.depositForm.value.pwd
    var amount=this.depositForm.value.amount

    let result=this.db.deposit(acno,password,amount)
    if(result){
      alert(amount+"Depositer Successfully. Balance is:"+result)
    }
    }
    else{
      alert("Invalid Form")
    }
    
  }

  withdraw(){

    if(this.withdrawFrom.valid){
      var acno=this.withdrawFrom.value.accno1
      var pwd=this.withdrawFrom.value.pwd1
      var amount=this.withdrawFrom.value.amount1
      let result =this.db.withdrawal(acno,pwd,amount)
  
      if(result){
        alert(amount +"Successfully withdrowed, Balance is:"+result)
        this.router.navigateByUrl("dashboard")
      }
    }
    else{
      alert("Invalid From")
    }
  }
}
