import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
database:any={1000:{acno:1000,uname:"Shahal",password:1000,balance:200000}}
username:any
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
  serlogin(acno:any,password:any)
{
let db = this.database
if(acno in db)
{
if(password==db[acno]['password'])
{
  
        this.username=this.database[acno]["uname"]
        localStorage.setItem("user",JSON.stringify(this.username))
  
        return true
  
}
else{
  alert("Incorrect password")
  return false
}
}
else{
  alert("User does not exist")
  return false
}
}
}
