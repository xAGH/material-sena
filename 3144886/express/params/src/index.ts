import express, { Express, Request, Response } from "express";
import { Product, ProductCategory } from "./products";

const app: Express = express();
const PORT = 5000;

let products: Product[] = [
    {
        id: 1,
        name: "Laptop",
        price: 3500,
        category: ProductCategory.ELECTRONICS,
    },
    {
        id: 2,
        name: "Keyboard",
        price: 150,
        category: ProductCategory.ELECTRONICS,
    },
    { id: 3, name: "Shirt", price: 80, category: ProductCategory.CLOTHING },
    { id: 4, name: "Book", price: 40, category: ProductCategory.BOOKS },

    { id: 5, name: "Mouse", price: 120, category: ProductCategory.ELECTRONICS },
    {
        id: 6,
        name: "Headphones",
        price: 300,
        category: ProductCategory.ELECTRONICS,
    },
    {
        id: 7,
        name: "Monitor",
        price: 1800,
        category: ProductCategory.ELECTRONICS,
    },
    {
        id: 8,
        name: "Smartphone",
        price: 2800,
        category: ProductCategory.ELECTRONICS,
    },

    { id: 9, name: "Jeans", price: 140, category: ProductCategory.CLOTHING },
    { id: 10, name: "Jacket", price: 260, category: ProductCategory.CLOTHING },
    {
        id: 11,
        name: "Sneakers",
        price: 220,
        category: ProductCategory.CLOTHING,
    },
    { id: 12, name: "Cap", price: 50, category: ProductCategory.CLOTHING },

    { id: 13, name: "Notebook", price: 25, category: ProductCategory.BOOKS },
    { id: 14, name: "Cookbook", price: 60, category: ProductCategory.BOOKS },
    { id: 15, name: "Novel", price: 55, category: ProductCategory.BOOKS },
    { id: 16, name: "Dictionary", price: 90, category: ProductCategory.BOOKS },

    { id: 17, name: "Desk Lamp", price: 130, category: ProductCategory.HOME },
    {
        id: 18,
        name: "Coffee Maker",
        price: 400,
        category: ProductCategory.HOME,
    },
    { id: 19, name: "Water Bottle", price: 35, category: ProductCategory.HOME },
    {
        id: 20,
        name: "Backpack",
        price: 110,
        category: ProductCategory.ACCESSORIES,
    },
    {
        id: 21,
        name: "Watch",
        price: 500,
        category: ProductCategory.ACCESSORIES,
    },
    {
        id: 22,
        name: "Sunglasses",
        price: 260,
        category: ProductCategory.ACCESSORIES,
    },
    {
        id: 23,
        name: "Wallet",
        price: 90,
        category: ProductCategory.ACCESSORIES,
    },
];


app.use(express.json());

app.get("/product", (req: Request, res: Response) => {
    res.status(200).json(products)
})

app.get("/product/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const product = products.find(el => el.id === id)
    if (product) {
        res.status(200).json(product)
    } else {
        res.status(404).json({message: "Producto no existe"})
    }
})

app.post("/product", (req: Request, res: Response) => {
    const body: Product = req.body;
    body.id = products.length + 1;
    products.push(body);
    res.status(201).json({body})
})

app.patch("/product/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const body: Partial<Product> = req.body
    products = products.map((el) => el.id === id ? { ...el, ...body } : el);
    res.status(204).send()
})

app.delete("/product/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    products = products.filter(el => el.id !== id);
    res.status(204).send()
})

app.listen(PORT, () =>
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
