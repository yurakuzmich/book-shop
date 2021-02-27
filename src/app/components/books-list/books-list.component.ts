import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'ng-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  booksList :IBook[] | undefined;
  cartService;

  constructor(books: BooksService, cartService: CartService) {
    this.booksList = books.getBooks();
    this.cartService = cartService;
  }

  ngOnInit(): void {
  }

  onBuy(book: IBook) {
    this.cartService.addBook(book);
  }

}
