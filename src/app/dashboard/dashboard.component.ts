import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
  deposit(){
    alert("desposit success")
  }

  withdraw(){
    alert("dwposit success")
  }

}
