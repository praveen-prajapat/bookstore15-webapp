import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Mycomponents/navbar/navbar.component';
import { BooksComponent } from './Mycomponents/books/books.component';
import { CardComponent } from './Mycomponents/card/card.component';
import { DashboardComponent } from './Mycomponents/dashboard/dashboard.component';
import { DetailsComponent } from './Mycomponents/details/details.component';
import { ContactusComponent } from './Mycomponents/contactus/contactus.component';
import { BookaddComponent } from './Mycomponents/bookadd/bookadd.component';
import { FooterComponent } from './Mycomponents/footer/footer.component';
import { CartComponent } from './Mycomponents/cart/cart.component';
import { AboutusComponent } from './Mycomponents/aboutus/aboutus.component';
import { ContactComponent } from './Mycomponents/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BooksComponent,
    CardComponent,
    CartComponent,
    DashboardComponent,
    DetailsComponent,
    ContactusComponent,
    BookaddComponent,
    FooterComponent,
    AboutusComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
