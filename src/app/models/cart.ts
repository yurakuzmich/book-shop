import { IBook } from "./book";

export interface ICart {
    book: IBook;
    quantity: number;
}
