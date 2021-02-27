import { IBook } from "./book";

export interface ICart {
    bookSpec: IBook;
    quantity: number;
}
