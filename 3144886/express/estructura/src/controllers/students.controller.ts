import { Request, Response } from "express";
import { StudentsService } from "../services/student.service";

const service = new StudentsService();

export function getAllStudents(req: Request, res: Response) {
    const courses = service.getStudents();
    res.status(200).json(courses);
}

export function getStudentById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const course = service.getStudentById(id);
    if (course) {
        res.status(200).json(course);
    } else {
        res.status(404).json({ message: "Estudiante no encontrado" });
    }
}

export function createStudent(req: Request, res: Response) {
    const course = req.body;
    service.createStudent(course);
    res.status(201).json({ message: "Estudiante creado" });
}

export function updateStudent(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const data = req.body;

    if (service.getStudentById(id)) {
        const updated = service.updateStudent(id, data);
        res.status(200).json(updated);
    } else {
        res.status(404).json({ message: "Estudiante no encontrado" });
    }
}

export function deleteStudent(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    if (service.getStudentById(id)) {
        service.deleteStudent(id);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Estudiante no encontrado" });
    }
}
