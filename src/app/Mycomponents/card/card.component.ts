import { Component,Input } from '@angular/core';
import { SharedService } from 'src/app/shareddetails/shared.service';
import { book } from 'src/app/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() book!:book;
  constructor(private sharedService: SharedService) {};
  title!:string;
  author!:string;
  desc!:string;
  price!:number;
  image!:string;
  onclick(){
    console.log("this");
    const selectedBook={
      title:this.book.title,
      author:this.book.author,
      desc:this.book.desc,
      price:this.book.price,
      image:this.book.image
    };
    console.log(selectedBook);
    if(selectedBook){
    this.sharedService.selectedBook=selectedBook;
    }
  }
}
