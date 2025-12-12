import { TodoStatus } from "../enum/todo-status";

export interface Todo {
    id: number;
    title: string;
    description: string;
    status: TodoStatus;
    userId: number;
}
