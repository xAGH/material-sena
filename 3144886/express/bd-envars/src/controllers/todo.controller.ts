import { Request, Response } from "express";
import { todoService } from "../services/todo.service";
import { Todo } from "../models/todo";

export const getTodos = async (req: Request, res: Response) => {
    const todos = await todoService.getAll();
    return res.json(todos);
};

export const getTodoById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const todo = await todoService.getById(id);

    if (!todo) {
        return res.status(404).json({ message: "TODO no encontrado" });
    }

    return res.json(todo);
};

export const createTodo = async (req: Request, res: Response) => {
    const body: Omit<Todo, "id"> = req.body;

    const todo = await todoService.create(body);

    return res.status(201).json({
        message: "TODO creado correctamente",
        todo,
    });
};

export const updateTodo = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { title, description } = req.body;

    const updated = todoService.update(id, { title, description });

    if (!updated) {
        return res.status(404).json({ message: "TODO no encontrado" });
    }

    return res.json({
        message: "TODO actualizado",
        todo: updated,
    });
};

export const deleteTodo = async (req: Request, res: Response) => {
    const { id } = req.params;

    const deleted = await todoService.delete(parseInt(id));

    return res.json({ message: "TODO eliminado" });
};
