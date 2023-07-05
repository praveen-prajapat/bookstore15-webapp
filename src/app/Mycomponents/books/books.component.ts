import { Component } from '@angular/core';
import { book } from 'src/app/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books!:book[];
  constructor(){
    this.books=[
      {
        title: "Atomic Habits",
        desc: "self growth book",
        price: 299,
        author: "James clear",
        image:"https://blackwells.co.uk/jacket/l/9781847941831.jpg"
      },
      {
        title: "Bhagwadgeeta",
        desc: "religious book",
        price: 699,
        author: "Maharashi vayas",
        image:"https://www.iskconbangalore.org/wp-content/uploads/2019/11/bhagavad-gita.jpg"
      },
      {
        title: "Rich dad, poor dad",
        desc: "self growth book",
        price: 299,
        author: "Robert T. kiyosaki",
        image:"https://gleegmjournal.com/wp-content/uploads/2021/04/rich-dad-poor-dad-cover.jpg"
      },
      {
        title: "The Alchemist",
        desc:"The book's main theme is about finding one's destiny, although according to The New York Times, The Alchemist is more self-help than literature.The advice given to Santiago that when you really want something to happen, the whole universe will conspire so that your wish comes true is the core of the novel's philosophy and a motif that plays throughout it.",
        price:399,
        author: "Paulo coelho",
        image:"https://www.iranbook-shop.com/wp-content/uploads/2016/08/The-Alchemist.jpg"
      },
    ];
  }
  addbook(book: book){
    this.books.push(book);
  }
}
