import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './Mycomponents/details/details.component';
import { CartComponent } from './Mycomponents/cart/cart.component';
import { BookaddComponent } from './Mycomponents/bookadd/bookadd.component';
import { BooksComponent } from './Mycomponents/books/books.component';
import { AboutusComponent } from './Mycomponents/aboutus/aboutus.component';
import { ContactusComponent } from './Mycomponents/contactus/contactus.component';
import { ContactComponent } from './Mycomponents/contact/contact.component';

const routes: Routes = [
  {path:'', redirectTo:"books" ,pathMatch:'full'},
  {path:'books',component:BooksComponent},
  {path:'details',component:DetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'bookadd',component:BookaddComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contact',component:ContactComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
