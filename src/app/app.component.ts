import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Return-order-management';
  but="Login";
 
  
  constructor(private route: Router) {
    if(localStorage.getItem("loggin")=="true"){
      this.but="LogOut";
    }
    
   

  }
  ngOnInit(): void{


  }
 
  
  login(){
    localStorage.setItem("loggin","false")
   
   
    this.route.navigateByUrl('/login');

  }
  
  
  
  
}

