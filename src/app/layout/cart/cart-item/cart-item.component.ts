import { Component, Input, OnInit } from '@angular/core';
import { BooksService, IBook } from '../../../services/books.service';

@Component({
  selector: 'kzmch-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() orderedItem: IBook;
  @Input() i: number;
  
  constructor(orderlist: BooksService) {
    this.i = -1;
    this.orderedItem = orderlist.orderedBooks[this.i];
   }

  ngOnInit(): void {
  }

  onDelete() {
    console.log(`The book "${this.orderedItem.name}" deleted from cart`);
  }

}
