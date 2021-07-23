import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  name:any=""
  pwd:any=""
  accno:any=""
    
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    var uname=this.name;
    var pwd=this.pwd;
    var accno=this.accno;
    console.log(uname,pwd,accno);
    
    var result=this.ds.register(accno,uname,pwd)

    if(result){
      alert("Successfully registered")
      this.router.navigateByUrl("")
    }
    else{
      alert("User already exist")
      this.router.navigateByUrl("")
    }
  }

}
