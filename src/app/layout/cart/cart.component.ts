import { Component, Input, OnInit } from '@angular/core';
import { BooksService, IBook } from 'src/app/services/books.service';

@Component({
  selector: 'kzmch-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  order: IBook[] = [];
  orderList: BooksService;

  constructor(orderlist: BooksService) {
    this.order = orderlist.orderedBooks;
    this.orderList = orderlist;
  }

  ngOnInit(): void {}

  ngOnChange(): void {
    this.order = this.orderList.orderedBooks;
  }
}
