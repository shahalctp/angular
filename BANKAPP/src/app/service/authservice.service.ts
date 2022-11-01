import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
database:any={1000:{acno:1000,uname:"Shahal",password:1000,balance:200000}}
  constructor() { }
  
  register(acno:any,uname:any,password:any){
    var db:any=this.database
    if(acno in db){
      return false
    }
    else{
      db[acno]={
        acno,
        uname,
        password,
        balance:0
      }
      console.log(db)
      return true
    }
  }
}
