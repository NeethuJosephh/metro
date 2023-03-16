import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service'; 
@Component({
  selector: 'app-signin-pages',
  templateUrl: './signin-pages.component.html',
  styleUrls: ['./signin-pages.component.css']
})
export class SigninPagesComponent {
  email:any=''
   pass:any=''
  constructor(private fireS:FireService){}
    Signin(){
      this.fireS.Signin(this.email,this.pass)
      this.email=''
  this.pass=''
    }
  
}
