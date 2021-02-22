import { Component, OnInit } from '@angular/core';
import { BooksService, IBook } from './../../services/books.service'


@Component({
  selector: 'kzmch-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {

books: IBook[] = [];
orderedBooks: IBook[];
library: BooksService;

  constructor(library: BooksService) {
    this.books = library.books;
    this.orderedBooks = library.orderedBooks;
    this.library = library;
  }

  ngOnInit(): void {}

  onBuy(i: number) {
    this.library.addToCart(i);
  }
}
