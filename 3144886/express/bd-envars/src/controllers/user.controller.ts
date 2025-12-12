import { Request, Response } from "express";
import { userService } from "../services/user.service";
import { User } from "../models/user";

export const getUsers = (req: Request, res: Response) => {
    const users = userService.getAll();
    return res.json(users);
};

export const getUserById = (req: Request, res: Response) => {
    const { id } = req.params;

    const user = userService.getById(parseInt(id));
    if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }

    return res.json(user);
};

export const getUserTodos = (req: Request, res: Response) => {
    return res.json({
        message: "Obtener todos los TODOs de todos los usuarios",
        note: "Aquí podrías llamar al todoService y relacionar usuarios",
    });
};

export const createUser = (req: Request, res: Response) => {
    const body: Omit<User, "id"> = req.body;

    const user = userService.create(body);

    return res.status(201).json({
        message: "Usuario creado",
        user,
    });
};

export const updateUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const updated = userService.update(parseInt(id), { name, email });

    if (!updated) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }

    return res.json({
        message: "Usuario actualizado",
        user: updated,
    });
};

export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;

    const deleted = userService.delete(parseInt(id));

    if (!deleted) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }

    return res.json({ message: "Usuario eliminado" });
};
