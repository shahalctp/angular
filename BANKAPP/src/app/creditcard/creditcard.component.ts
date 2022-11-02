import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {
  uname:any
  acno:any
  password:any
  mobilenumber:any
  pancard:any
  credDatabase:any={}
  dummyarray:any=[]
  constructor() { }

  ngOnInit(): void {
  }
  credcardfun(){
this.credDatabase[this.acno]={
  uname:this.uname,
  acno:this.acno,
  password:this.password,
  mobilenumber:this.mobilenumber,
  pancard:this.pancard
}
alert("Applied Successfully")
console.log(this.credDatabase)
this.dummyarray.push({
  uname:this.uname,
  acno:this.acno,
  password:this.password,
  mobilenumber:this.mobilenumber,
  pancard:this.pancard
})
  }
}
