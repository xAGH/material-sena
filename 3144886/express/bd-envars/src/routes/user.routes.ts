import { Router } from "express";
import {
    getUsers,
    getUserById,
    getUserTodos,
    createUser,
    updateUser,
    deleteUser,
} from "../controllers/user.controller";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.get("/todo", getUserTodos);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
