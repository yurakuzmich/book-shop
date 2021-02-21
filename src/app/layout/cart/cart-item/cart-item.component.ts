import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../../book/book.component';

@Component({
  selector: 'kzmch-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() orderedItem: IBook;
  
  constructor() { }

  ngOnInit(): void {
  }

}
