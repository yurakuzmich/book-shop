import { Injectable } from '@angular/core';

enum bookCategories {
  children,
  adults,
}

export interface IBook {
  name: string;
  description: string;
  price: number;
  category: bookCategories;
  createDate: number;
  isAvailable: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  
  books: IBook[] = [
    {
      name: 'First Book about flowers',
      description: 'Very interesting book about flowers',
      price: 125,
      category: 2,
      createDate: 2020,
      isAvailable: true,
    },
    {
      name: 'Second Book about toys',
      description: 'This book is about different toys',
      price: 205,
      category: 1,
      createDate: 2020,
      isAvailable: true,
    },
    {
      name: 'Third Book',
      description: 'This is just a third book',
      price: 2,
      category: 2,
      createDate: 2020,
      isAvailable: false,
    },
    {
      name: 'Fourth Book about flowers',
      description: 'One more very interesting book about flowers',
      price: 225,
      category: 2,
      createDate: 2020,
      isAvailable: true,
    },
    {
      name: 'Fairy tales',
      description: 'A good piece of different fairy tales',
      price: 25,
      category: 1,
      createDate: 2020,
      isAvailable: true,
    },
  ];

  orderedBooks: IBook[] = [];
  constructor() {}

  addToCart(i: number) {
    this.orderedBooks = [...this.orderedBooks, this.books[i]];
    console.log(this.orderedBooks);
  }
}
