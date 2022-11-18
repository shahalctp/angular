import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
database:any={1000:{acno:1000,uname:"Shahal",password:1000,balance:200000}}
username:any
  constructor(private http:HttpClient) { }
  
  register(acno:any,uname:any,password:any){

const data ={
  acno,
  uname,
  password
}
return this.http.post("http://localhost:3001/register",data)
} 
    // var db:any=this.database
    // if(acno in db){
    //   return false
    // }
    // else{
    //   db[acno]={
    //     acno,
    //     uname,
    //     password,
    //     balance:0
    //   }
    //   console.log(db)
    //   return true
    // }



    login(acno:any,password:any){
      console.log("user:",acno,password);
      
      const data={
        "acno":acno,
        "password":password
      }
      console.log("user:")
      return this.http.post("http://localhost:3001/login",data)
    }
 
//   serlogin(acno:any,password:any)
// {
// let db = this.database
// if(acno in db)
// {
// if(password==db[acno]['password'])
// {
  
//         this.username=this.database[acno]["uname"]
//         localStorage.setItem("data",JSON.stringify(this.username))
  
//         return true
  
// }
// else{
//   alert("Incorrect password")
//   return false
// }
// }
// else{
//   alert("User does not exist")
//   return false
// }
// }
}
