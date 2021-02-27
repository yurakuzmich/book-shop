import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'ng-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  booksInCart: ICart[] = [];

  constructor(ordered: CartService) {
    this.booksInCart = ordered.getOrderedBooks();
  }

  ngOnInit(): void {
  }

}
