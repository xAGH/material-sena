export enum ProductCategory {
    ELECTRONICS = "electronics",
    CLOTHING = "clothing",
    BOOKS = "books",
    ACCESSORIES = "accessories",
    HOME = "home",
}

export interface Product {
    id: number;
    name: string;
    price: number;
    category: ProductCategory;
}

