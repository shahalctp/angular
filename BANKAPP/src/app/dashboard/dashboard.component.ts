import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../service/authservice.service';

const options={
  headers:new HttpHeaders
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

dacno: any;
damount: any;
dpassword: any;

wacno: any;
wamount: any;
wpassword: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  getOptions(){
    var token=JSON.parse(localStorage.getItem('token')||'')
    let headers=new HttpHeaders()
    if(token){
      headers=headers.append('x-access-token',token)
      options.headers=headers
    }
    return options


  }


  deposit()
  {
    var acno=this.dacno
    var amount=this.damount
    var password=this.dpassword
    //  var database=this.db.database

    const body={
      acno,
      password,
      amount
    }
this.http.post('http:localhost:3001/deposit',body,this.getOptions())
.subscribe((result:any)=>{
alert(result.message)


},(result:any)=>{
alert(result.error.message)
}
)
  //   if(acno in database)
  //   {
  //     if(password ==database[acno]["password"])
  //     {
  //       database[acno]["balance"]+=Number(Amount)
  //       database[acno]["transaction"]={
  //         type:"online",
  //         Amount:Amount
  //       }
  //       alert(`Amount ${Amount} is credited,your account balance is ${database[acno]["balance"]}`)
  //     }
  //     else{
  //       alert("password invalid")
  //     }
      
  //   }
  //   else{
  //     alert("Account not found")
    // }
  }

  withdraw(){
    var acno=this.wacno
      var amount=this.wamount
      var password=this.wpassword

      const body={
        acno,
        password,
        amount
      }
  this.http.post('http:localhost:3001/withdraw',body,this.getOptions())
  .subscribe((result:any)=>
  {
    alert(result.message)
  },(result:any)=>{
  alert(result.error.message)
  }
  )
      // var database=this.db.database

      // if(acno in database){
      //   if(password==database[acno]["password"])
      //   {
      //     if(Number(Amount)<database[acno]["balance"])
      //     {
      //       database[acno]["balance"]-=Number(Amount)
      //       database[acno]["transaction"]={
      //         type:"online",
      //         Amount:Amount
      //       }
      //       alert(`amount ${Amount} is Debited,Your account balance is ${database[acno]["balance"]}`)
      //     }
      //     else{
      //       alert("insufficient funds")
      //     }
      //   }
      //   else{
      //     alert("Account not found")
      //   }
      // }
    }
  }
