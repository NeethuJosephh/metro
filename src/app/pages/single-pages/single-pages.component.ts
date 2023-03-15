import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { data } from 'src/assets/data';


@Component({
  selector: 'app-single-pages',
  templateUrl: './single-pages.component.html',
  styleUrls: ['./single-pages.component.css']
})
export class SinglePagesComponent {
  constructor(private hero:HeroService) {}

  data=this.hero.giveData()
    single:any
  

  ngOnInit(){
    let id = Number(localStorage.getItem('id'))
    this.single = data.filter(e=>e.id===id)
    console.log("title",this.single)
  }
}
