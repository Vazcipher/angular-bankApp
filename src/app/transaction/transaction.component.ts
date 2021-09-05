import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  currentBalance:any
  transactions:any
  acno:any
  constructor(public ds:DataService) {
    this.acno=localStorage.getItem("currentAcc")
    this.ds.getTransaction(this.acno).subscribe((result:any)=>{
      if(result){
        this.transactions=result.transaction
        this.currentBalance=result.balance
        console.log(result);
      }
    })
    // this.currentBalance=this.ds.currentBalance
    // console.log(this.currentBalance);
    
    // let currentBalance=this.ds.getTransaction()
   }

  ngOnInit(): void {
  }

}
