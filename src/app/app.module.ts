import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './layout/book/book.component';
import { CartComponent } from './layout/cart/cart.component';
import { CartItemComponent } from './layout/cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
