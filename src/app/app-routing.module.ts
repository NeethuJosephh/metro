import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { RoutesPagesComponent } from './pages/routes-pages/routes-pages.component';
import { BookingPagesComponent } from './pages/booking-pages/booking-pages.component';
import { SigninPagesComponent } from './pages/signin-pages/signin-pages.component';
import { SignupPagesComponent } from './pages/signup-pages/signup-pages.component';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { DestinationPagesComponent } from './pages/destination-pages/destination-pages.component';
import { TimePagesComponent } from './pages/time-pages/time-pages.component';
import { SinglePagesComponent } from './pages/single-pages/single-pages.component';
import { PaymentPagesComponent } from './pages/payment-pages/payment-pages.component';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { FormPageComponent } from './pages/form-page/form-page.component';


const routes: Routes = [
  {
    path:'',component:HomePagesComponent
  },
  {
    path:'contact',component:ContactPagesComponent
  },
  {
    path:'signup',component:SignupPagesComponent
  },
  {
    path:'signin',component:SigninPagesComponent
  },
  {
    path:'booking',component:BookingPagesComponent
  },
  {
    path:'routes',component:RoutesPagesComponent
  },
  {
    path:'destination',component:DestinationPagesComponent
  },
  {
    path:'time',component:TimePagesComponent
  },
  {
    path:'single',component:SinglePagesComponent
  },
 
  {
    path:'payment',component:PaymentPagesComponent
  },
  {
    path:'about',component:AboutPagesComponent
  },
  {
    path:'form',component:FormPageComponent
  },
 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
