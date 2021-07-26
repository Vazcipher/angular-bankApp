import { Component, OnInit } from '@angular/core';
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

  constructor(private db:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  deposit(){
    var acno=this.accno;
    var password=this.pwd
    var amount=this.amount

    let result=this.db.deposit(acno,password,amount)
    if(result){
      alert(amount+"Depositer Successfully. Balance is:"+result)
    }
    
  }

  withdraw(){
    var acno=this.accno1
    var pwd=this.pwd1
    var amount=this.amount1
    let result =this.db.withdrawal(acno,pwd,amount)

    if(result){
      alert(amount +"Successfully withdrowed, Balance is:"+result)
      this.router.navigateByUrl("dashboard")
    }
  }

}
