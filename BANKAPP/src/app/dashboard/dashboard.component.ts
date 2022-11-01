import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

acno: any;
Amount: any;
password: any;

  constructor(private db:AuthserviceService) { }

  ngOnInit(): void {
  }
  deposit()
  {
    var acno=this.acno
    var Amount=this.Amount
    var password=this.password
    var database=this.db.database

    if(acno in database)
    {
      if(password ==database[acno]["password"])
      {
        database[acno]["balance"]+=Number(Amount)
        database[acno]["transaction"]={
          type:"online",
          Amount:Amount
        }
        alert(`Amount ${Amount} is credited,your account balance is ${database[acno]["balance"]}`)
      }
      else{
        alert("password invalid")
      }
      
    }
    else{
      alert("Account not found")
    }
  }

  withdraw(){
    var acno=this.acno
      var Amount=this.Amount
      var password=this.password
      var database=this.db.database

      if(acno in database){
        if(password==database[acno]["password"])
        {
          if(Number(Amount)<database[acno]["balance"])
          {
            database[acno]["balance"]-=Number(Amount)
            database[acno]["transaction"]={
              type:"online",
              Amount:Amount
            }
            alert(`amount ${Amount} is Debited,Your account balance is ${database[acno]["balance"]}`)
          }
          else{
            alert("insufficient funds")
          }
        }
        else{
          alert("Account not found")
        }
      }
    }
  }
