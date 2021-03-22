import { NgModule } from '@angular/core';
import { BookComponent } from './book/book.component';
import { BooksListComponent } from './books-list/books-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    BookComponent,
    BooksListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BooksListComponent },
    ]),
  ],
  exports: [
    BooksListComponent,
    BookComponent
  ]
})
export class BooksModule { }
