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
  userName=localStorage.getItem("userName")
  acno:any
  constructor(private db:DataService,private router:Router,private fb:FormBuilder) { }

 
  ngOnInit(): void {
  }
  deposit(){

    if(this.depositForm.valid){
      var acno=this.depositForm.value.accno
      var password=this.depositForm.value.pwd
      var amount=this.depositForm.value.amount

    this.db.deposit(acno,password,amount).subscribe((result:any)=>{
      if(result){
        alert(result.message)
      }
    },(result)=>{
      alert(result.error.message)
    })
    }
    else{
      alert("Invalid Form")
    }
    
  }

  deletAcc(){
    this.acno=localStorage.getItem("currentAcc")
  }

  withdraw(){

    if(this.withdrawFrom.valid){
      var acno=this.withdrawFrom.value.accno1
      var pwd=this.withdrawFrom.value.pwd1
      var amount=this.withdrawFrom.value.amount1

      this.db.withdrawal(acno,pwd,amount).subscribe((result:any)=>{
        if(result){
          alert(result.message)
          this.router.navigateByUrl("dashboard")
        }
      },(result)=>{
        alert(result.error.message)
      })
    }
    else{
      alert("Invalid From")
    }
  }

  onDelete(acno:any){
    this.db.deleteAcc(acno).subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.router.navigateByUrl("")
      }
    },(result)=>{
      alert(result.error.message)
    })
  }
  
  cancel(){
    this.acno=""
  }
}
