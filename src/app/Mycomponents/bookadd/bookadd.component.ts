import { Component,Output,EventEmitter } from '@angular/core';
import { book } from 'src/app/book';

@Component({
  selector: 'app-bookadd',
  templateUrl: './bookadd.component.html',
  styleUrls: ['./bookadd.component.css']
})
export class BookaddComponent {
  @Output() bookadd:EventEmitter<book>=new EventEmitter;
  constructor(){};
   title!:string;
   author!:string;
   desc!:string;
   price!:number;
   image!:string;
   onSubmit(){
    const book={
      title:this.title,
      author:this.author,
      desc:this.desc,
      price:this.price,
      image:this.image
    };
    this.bookadd.emit(book);
   }
}
