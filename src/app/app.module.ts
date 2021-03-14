import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksListComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
