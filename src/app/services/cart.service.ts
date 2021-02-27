import { Injectable } from '@angular/core';
import { IBook } from '../models/book';
import { ICart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  addedToCart: ICart[] | [] = [];

  constructor() { }

  addBook(book: IBook) {
    this.addedToCart = [...this.addedToCart, {bookSpec: book, quantity: 1}];
  }

  getOrderedBooks() {
    return this.addedToCart;
  }
}
