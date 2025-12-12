import dotenv from "dotenv";
dotenv.config();

import express from "express";

import userRouter from "./routes/user.routes";
import todoRouter from "./routes/todo.routes";
import { pool } from "./config/db.config";

const app = express();
const PORT = parseInt(process.env.APP_PORT || "3000");

// Middlewares
app.use(express.json());

// Routes
app.use("/user", userRouter);
app.use("/todo", todoRouter);

// Listen

pool.getConnection()
    .then(() =>
        app.listen(PORT, () => {
            console.log("App inicializada en http://127.0.0.1:" + PORT);
        })
    )
    .catch(() => console.log("Error el conectarse a la base de datos"));
