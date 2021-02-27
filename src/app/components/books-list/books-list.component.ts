import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'ng-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  booksList :IBook[] | undefined;

  constructor(books: BooksService) {
    this.booksList = books.getBooks();
  }

  ngOnInit(): void {
  }

}
