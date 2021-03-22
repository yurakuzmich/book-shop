import { Component, OnInit, Output } from '@angular/core';
import { IBook } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'ng-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {

  booksList: IBook[] | any= [];
  currentBook: IBook;
  cartService;

  constructor(cart: CartService, booksList: BooksService, cartService: CartService) {
    this.booksList = booksList.getBooks();
    this.currentBook = booksList.books[0];
    this.cartService = cartService;
  }

  ngOnInit(): void { }

  onSelectBook(i: number) {
    let selected = this.booksList[i];
    this.currentBook = selected;
  }

  onBuy() {
    this.cartService.addBook(this.currentBook);
  }
}
