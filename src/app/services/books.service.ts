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
        'The primary obhors of the critically acclaimed bestseller Made to Stick. Psychologists have discovered that our minds are ruled by two different systems—the rational mind and the emotional mind—that compete for control. The rational mind wants a great beach body; the emotional mind wants that Oreo cookie.',
      price: 15.49,
      category: 1,
      createDate: 3545436575687,
      isAvailable: true,
    },
    {
      bookId: 2,
      name: 'Second book',
      description:
        'The primary obstacle is a conflict that’s built into our brains, say Chi.',
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
        'The primary obstacle is a conflict that’s built iors of the critically acclaimed bestseller Made to Stick. Psychologists have discovered that our minds are ruled by two different systems—the rational mind and the emotional mind—that compete for control. The rational mind wants a great beach body; the emotional mind wants that Oreo cookie.',
      price: 19.99,
      category: 1,
      createDate: 3545436575687,
      isAvailable: false,
    },
    {
      bookId: 4,
      name: 'Fifth book',
      description:
        'ip and Dan Heath, authors of the critically acclaimed bestseller Made to Stick. Psychologists have discovered that our minds are ruled by two different systems—the rational mind and the emotional mind—that compete for control. The rational mind wants a great beach body; the emotional mind wants that Oreo cookie.',
      price: 129.99,
      category: 1,
      createDate: 3545436575687,
      isAvailable: true,
    },
    {
      bookId: 4,
      name: 'Sixth book',
      description:
        'The primary obstacle is a conflict that’s built into our brains, say Chip and Dan Heath, authors of the critically acclaimed bestseller Made to Stick. Psychologists have discovered that our minds are ruled by two different systems—the rational mind and the emotional mind—that compete for control. The rational mind wants a great beach body; the emotional mind wants that Oreo cookie.',
      price: 21.49,
      category: 3,
      createDate: 3545436575687,
      isAvailable: true,
    },
    {
      bookId: 4,
      name: 'Seventh book',
      description:
        'The primary obstacle is a conflict that’s built into our brains, say Chip and Dan Heath, authors of the critically acclaimed bestseller Made to Stick. Psychologists have discovered that our minds are ruled by two different systems—the rational mind and the emotional mind—that compete for control. The rational mind wants a great beach body; the emotional mind wants that Oreo cookie.',
      price: 94.49,
      category: 2,
      createDate: 3545436575687,
      isAvailable: false,
    },
    {
      bookId: 4,
      name: 'Eights book',
      description:
        'The primary obstacle is a sellerent systems—the rational mind and the emotional mind—that compete for control. The rational mind wants a great beach body; the emotional mind wants that Oreo cookie.',
      price: 19.99,
      category: 1,
      createDate: 3545436575687,
      isAvailable: true,
    },
    {
      bookId: 4,
      name: 'Tenth book',
      description:
        'The primary or brains, say Chip and Dan Heath, authors of the critically acclaimed bestseller Made to Stick. Psychologists have discovered that our minds are ruled by two different systems—the rational mind and the emotional mind—that compete for control. The rational mind wants a great beach body; the emotional mind wants that Oreo cookie.',
      price: 19.99,
      category: 1,
      createDate: 3545436575687,
      isAvailable: false,
    },
  ];

  constructor() { }

  getBooks() {
    return this.books;
  }
}
