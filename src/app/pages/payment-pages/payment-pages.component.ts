import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-payment-pages',
  templateUrl: './payment-pages.component.html',
  styleUrls: ['./payment-pages.component.css']
})
export class PaymentPagesComponent {
  constructor(private router:Router,private hero:HeroService) {}
  payment=this.hero.giveData();
  gotohere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/single']);


  }


}
