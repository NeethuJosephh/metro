import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { SigninPagesComponent } from './pages/signin-pages/signin-pages.component';

import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { RoutesPagesComponent } from './pages/routes-pages/routes-pages.component';
import { BookingPagesComponent } from './pages/booking-pages/booking-pages.component';
import { SignupPagesComponent } from './pages/signup-pages/signup-pages.component';
import { DestinationPagesComponent } from './pages/destination-pages/destination-pages.component';
import { TimePagesComponent } from './pages/time-pages/time-pages.component';
import { SinglePagesComponent } from './pages/single-pages/single-pages.component';
import { PaymentPagesComponent } from './pages/payment-pages/payment-pages.component';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS} from '@angular/fire/compat';


@NgModule({
  declarations: [
    AppComponent,
    HomePagesComponent,
    SigninPagesComponent,
  
    ContactPagesComponent,
    NavbarComponent,
    FooterComponent,
    RoutesPagesComponent,
    BookingPagesComponent,
    SignupPagesComponent,
    DestinationPagesComponent,
    TimePagesComponent,
    SinglePagesComponent,
    PaymentPagesComponent,
    AboutPagesComponent,
    FormPageComponent,
  
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
