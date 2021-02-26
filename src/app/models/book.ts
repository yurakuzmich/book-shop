enum bookCategories {
    art = 1,
    busines,
    economics,
    marketing
}

export interface IBook {
    bookId: number;
    name: string;
    description: string;
    price: number;
    category: bookCategories;
    createDate: number;
    isAvailable: boolean;
}
