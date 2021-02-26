import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/book';

@Component({
  selector: 'ng-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  books: IBook[] = [
    {
      bookId: 1,
      name: 'Switch: How to Change Things When Change Is Hard',
      description:
        'The primary obstacle is a conflict that’s built into our brains, say Chip and Dan Heath, authors of the critically acclaimed bestseller Made to Stick. Psychologists have discovered that our minds are ruled by two different systems—the rational mind and the emotional mind—that compete for control. The rational mind wants a great beach body; the emotional mind wants that Oreo cookie.',
      price: 15.49,
      category: 1,
      createDate: 3545436575687,
      isAvailable: true,
    },
    {
      bookId: 2,
      name: 'Switch: How to Change Things When Change Is Hard',
      description:
        'The primary obstacle is a conflict that’s built into our brains, say Chip and Dan Heath, authors of the critically acclaimed bestseller Made to Stick. Psychologists have discovered that our minds are ruled by two different systems—the rational mind and the emotional mind—that compete for control. The rational mind wants a great beach body; the emotional mind wants that Oreo cookie.',
      price: 16.49,
      category: 1,
      createDate: 3545436575687,
      isAvailable: true,
    },
    {
      bookId: 3,
      name: 'Switch: How to Change Things When Change Is Hard',
      description:
        'The primary obstacle is a conflict that’s built into our brains, say Chip and Dan Heath, authors of the critically acclaimed bestseller Made to Stick. Psychologists have discovered that our minds are ruled by two different systems—the rational mind and the emotional mind—that compete for control. The rational mind wants a great beach body; the emotional mind wants that Oreo cookie.',
      price: 14.49,
      category: 1,
      createDate: 3545436575687,
      isAvailable: false,
    },
    {
      bookId: 4,
      name: 'Switch: How to Change Things When Change Is Hard',
      description:
        'The primary obstacle is a conflict that’s built into our brains, say Chip and Dan Heath, authors of the critically acclaimed bestseller Made to Stick. Psychologists have discovered that our minds are ruled by two different systems—the rational mind and the emotional mind—that compete for control. The rational mind wants a great beach body; the emotional mind wants that Oreo cookie.',
      price: 19.99,
      category: 1,
      createDate: 3545436575687,
      isAvailable: true,
    },
  ];

  currentBook: IBook = this.books[0];
  constructor() {}

  ngOnInit(): void {}

  onBuy() {
    alert(`Added to Cart`);
  }
}
