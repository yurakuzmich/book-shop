import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { BooksListComponent } from './components/books-list/books-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CartComponent,
    CartItemComponent,
    BooksListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
