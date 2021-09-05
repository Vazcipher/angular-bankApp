import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    name:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){

    if(this.registerForm.valid){
      var uname=this.registerForm.value.name;
      var pwd=this.registerForm.value.pswd;
      var accno=this.registerForm.value.acno
      console.log(uname,pwd,accno);
      
      this.ds.register(accno,uname,pwd).subscribe((result:any)=>{
        if(result){
          alert(result.message)
          this.router.navigateByUrl("")
        }
      },(result)=>{
        alert(result.error.message)
        // this.router.navigateByUrl("")

      })
      
      // else{
      //   alert("User already exist")
      //   this.router.navigateByUrl("")
      // }
    }
    else{
      alert("Invalid From")
    }
    
  }

}
