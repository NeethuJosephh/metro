import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';
@Component({
  selector: 'app-payment-pages',
  templateUrl: './payment-pages.component.html',
  styleUrls: ['./payment-pages.component.css']
})
export class PaymentPagesComponent {
  fname:any=''
  email:any=''
  cd:any=''
  card:any=''
  cvc:any=''
details:any=''
  constructor(private fireS:FireService){}
   ngOnInit(){
    this.fireS.getpaynow().subscribe(data =>{
      this.details =data
    })
  }

  paynow(){
    this.validation()
    let info={
      Name:this.fname,
      EmailAddress:this.email,
      CD:this.cd,
      CARD:this.card,
      CVC:this.cvc,
    }
   this.fireS.paynow(info)
   this.fname=''
   this.email=''
   this.cd=''
   this.card=''
   this.cvc=''
  }
  validation()
  {
    if(this.fname==='')
    {
      alert('please enter your name')
    }
    else if(this.email==='')
    {
      alert('please enter your email')
    }
    
    else if(this.cvc==='')
    {
      alert('please enter your cvc')
    }

  }
}

