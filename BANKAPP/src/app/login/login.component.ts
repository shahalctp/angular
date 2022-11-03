import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  database:any={
    1000:{acno:1000,uname:"Shahal",password:1000,Balance:25000}
  }

  abc:any="Welcome to Bank"
  accno:any="Enter your Account no"
  pswd:any="Enter your Password"
  pswd1:any=""
  accountnumber:any
  username:any
  constructor(private route:Router,private db:AuthserviceService) { }

  ngOnInit(): void {
  }
  login()
  {
    var acno:any=this.accountnumber
    var pswd:any=this.pswd1
    if(this.db.serlogin(acno,pswd)==true)
    {
      alert("Login success")
      this.route.navigateByUrl("dashboard")
    }
    else
    {
      this.route.navigateByUrl("")
    }
  }
  //   if(acno in this.db.database)
  //   {
  //     if(pswd==this.db.database[acno]["password"])
  //     {
  //       alert("Login Successfull")
        
  //       this.route.navigateByUrl("dashboard")
  //     }
  //     else
  //     {
  //       alert("Incorrect Password")
  //     }
      
  //   }
  //   else
  //   {
  //     alert("Not registered")
  //   }

  
  
  //   // alert("Login Clicked")
  

//   acnochange(event:any)
//   {
//     console.log(event)

//     this.accountnumber=event.target.value
//     console.log("INPUT:",this.accountnumber)
//   }
//   passwordchange(event:any)
//   {
//     console.log(event)

//     this.pswd1=event.target.value
//     console.log("INPUT:",this.pswd1)
//   }
}
