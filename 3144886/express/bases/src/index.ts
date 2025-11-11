import express, { Express, Request, Response } from "express"

const app: Express = express()
const PORT: number = 3000

// Middleware para usar json
app.use(express.json())

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello world")
})

app.post("/usuario", (req: Request, res: Response) => {
    res.send("Usuario creado!")
})

app.listen(PORT, () => {
    console.log(`La aplicación está corriendo en http://localhost:${PORT}`)
})