import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FireService } from 'src/app/fire.service';
@Component({
  selector: 'app-booking-pages',
  templateUrl: './booking-pages.component.html',
  styleUrls: ['./booking-pages.component.css']
})
export class BookingPagesComponent {
  DESTINATION:string=''
  START:string=''


  constructor(private fireS:FireService,private r:Router){}
  addData(){
    if(this.DESTINATION==='')
    {
      alert('please enter your destination')
      return
    }
    else if(this.START==='')
    {
      alert('please enter your start')
      return
    }
    let f={
      start:this.START,
      dest:this.DESTINATION
    }
    this.fireS.addData(f)
    this.r.navigate(['/time'])
  }

}


  



