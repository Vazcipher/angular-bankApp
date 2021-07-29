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
  constructor(public ds:DataService) {
    this.transactions=this.ds.getTransaction()
    this.currentBalance=this.ds.currentBalance
    console.log(this.currentBalance);
    
    // let currentBalance=this.ds.getTransaction()
   }

  ngOnInit(): void {
  }

}
