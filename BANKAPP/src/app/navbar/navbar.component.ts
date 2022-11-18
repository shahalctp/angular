import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
Logout() {
this.route.navigateByUrl('')
}
username:any

  constructor(private route:Router) { 
    this.username=JSON.parse(localStorage.getItem("currentname")||"")
  }

  ngOnInit(): void {
  }
  logout()
  {
    this.route.navigateByUrl
  }

}
