import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/models/cart';

@Component({
  selector: 'ng-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

@Input() booksInCart: ICart[] | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log(this.booksInCart);
  }
}
