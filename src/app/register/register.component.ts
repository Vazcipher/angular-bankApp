import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  
  registerForm=this.fb.group({
    name:[''],
    acno:[''],
    pswd:['']
  })

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    var uname=this.registerForm.value.name;
    var pwd=this.registerForm.value.pswd;
    var accno=this.registerForm.value.acno
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

}21487433
