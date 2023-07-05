import { Injectable } from '@angular/core';
import { book } from '../book';


@Injectable({
  providedIn: 'root'
})

export class SharedService {
  public selectedBook: book | null = null;
  constructor() { }
}
