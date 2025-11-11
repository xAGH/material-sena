import express, { Express, Request, Response } from "express"

const app: Express = express()
const PORT: number = 3000

// Middleware para usar json
app.use(express.json())

interface User {
    name: string,
    age: number
    password: string,
    email: string
}

const users: User[] = []

app.get("/users", (req: Request, res: Response) => {
    res.status(200).json(users).send()
})

app.post("/users", (req: Request, res: Response) => {
    const user = req.body;
    users.push(user)
    res.status(201).json(user).send()
})

app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`)
})