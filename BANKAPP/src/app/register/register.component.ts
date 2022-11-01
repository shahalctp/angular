import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // uname:any
  // acno:any
  // password:any

  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern("[a-zA-Z]*")]],
    acno:['',[Validators.required,Validators.pattern("[0-9]*")]],
    password:['',[Validators.required,Validators.pattern("[a-zA-Z]*")]]

  })
  constructor(private db:AuthserviceService,private route:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
onregister()
{
  var acno:any=this.registerForm.value.acno
  var uname:any=this.registerForm.value.uname
  var password:any=this.registerForm.value.password

  if(this.registerForm.valid)
  {

  if(this.db.register(acno,uname,password)==false){
    alert("Already Registered")
    this.route.navigateByUrl('')
  }
  else{
    alert("Register Successfull")
    this.route.navigateByUrl('')
  }
}
else{
  alert("Not a valid form")
}
}
}
