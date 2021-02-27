import { Injectable } from '@angular/core';
import { IBook } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: IBook[] = [
    {
      bookId: 1,
      name: 'First book',
      description:
        'The primary obstacle is a conflict that’s built into our brains, say Chip and Dan Heath, authors of the critically acclaimed bestseller Made to Stick. Psychologists have discovered that our minds are ruled by two different systems—the rational mind and the emotional mind—that compete for control. The rational mind wants a great beach body; the emotional mind wants that Oreo cookie.',
      price: 15.49,
      category: 1,
      createDate: 3545436575687,
      isAvailable: true,
    },
    {
      bookId: 2,
      name: 'Second book',
      description:
        'The primary obstacle is a conflict that’s built into our brains, say Chip and Dan Heath, authors of the critically acclaimed bestseller Made to Stick. Psychologists have discovered that our minds are ruled by two different systems—the rational mind and the emotional mind—that compete for control. The rational mind wants a great beach body; the emotional mind wants that Oreo cookie.',
      price: 16.49,
      category: 1,
      createDate: 3545436575687,
      isAvailable: true,
    },
    {
      bookId: 3,
      name: 'Third book',
      description:
        'The primary obstacle is a conflict that’s built into our brains, say Chip and Dan Heath, authors of the critically acclaimed bestseller Made to Stick. Psychologists have discovered that our minds are ruled by two different systems—the rational mind and the emotional mind—that compete for control. The rational mind wants a great beach body; the emotional mind wants that Oreo cookie.',
      price: 14.49,
      category: 1,
      createDate: 3545436575687,
      isAvailable: false,
    },
    {
      bookId: 4,
      name: 'Fourth book',
      description:
        'The primary obstacle is a conflict that’s built into our brains, say Chip and Dan Heath, authors of the critically acclaimed bestseller Made to Stick. Psychologists have discovered that our minds are ruled by two different systems—the rational mind and the emotional mind—that compete for control. The rational mind wants a great beach body; the emotional mind wants that Oreo cookie.',
      price: 19.99,
      category: 1,
      createDate: 3545436575687,
      isAvailable: true,
    },
  ];

  constructor() { }

  getBooks() {
    return this.books;
  }
}
