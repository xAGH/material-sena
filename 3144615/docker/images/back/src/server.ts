import express from "express";
import cors from "cors";
import { Pool } from "pg";

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
});

async function initDB() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS tasks(
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL
        )
    `);
}

initDB();

app.get("/tasks", async (req, res) => {
    const result = await pool.query("SELECT * FROM tasks ORDER BY id DESC");
    res.json(result.rows);
});

app.post("/tasks", async (req, res) => {
    const { title } = req.body;

    const result = await pool.query(
        "INSERT INTO tasks(title) VALUES($1) RETURNING *",
        [title],
    );

    res.json(result.rows[0]);
});

app.delete("/tasks/:id", async (req, res) => {
    const { id } = req.params;

    await pool.query("DELETE FROM tasks WHERE id=$1", [id]);

    res.json({ message: "deleted" });
});

app.listen(3000, "0.0.0.0", () => {
    console.log("API running on port 3000");
});
