import { pool } from "../config/db.config";
import { Todo } from "../models/todo";

class TodoService {
    async getAll(): Promise<Todo[]> {
        const connection = await pool.getConnection();
        const [todos] = await connection.query("SELECT * FROM todo;");
        connection.destroy();
        return todos as Todo[];
    }

    async getById(id: number): Promise<Todo | undefined> {
        const connection = await pool.getConnection();
        const [todo] = await connection.query(
            "SELECT * FROM todo WHERE id = ?",
            [id]
        );
        return (todo as Todo[])[0];
    }

    async create(todo: Omit<Todo, "id">): Promise<Todo> {
        const connection = await pool.getConnection();
        const [inserted] = await connection.query(
            "INSERT INTO todo(title, description, status, userId) VALUES (?, ?, ?, ?)",
            [todo.title, todo.description, todo.status, todo.userId]
        );
        return inserted as unknown as Todo;
    }

    async update(
        id: number,
        data: Partial<Omit<Todo, "id">>
    ): Promise<Todo | undefined> {
        const todo = await this.getById(id);
        if (!todo) return undefined;

        Object.assign(todo, data);
        return todo;
    }

    async delete(id: number): Promise<boolean> {
        const exists = await this.getById(id);

        if (exists) {
            const connection = await pool.getConnection();
            await connection.query("DELETE FROM todo WHERE id = ?", [id]);
            return true;
        } else {
            return false;
        }
    }
}

export const todoService = new TodoService();
