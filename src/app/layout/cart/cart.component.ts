import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../book/book.component';

@Component({
  selector: 'kzmch-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() order: IBook;
  
  constructor() { }

  ngOnInit(): void { }

}
