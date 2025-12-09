import { Request, Response } from "express";
import { EnrollementService } from "../services/enrollement.service";
import { StudentsService } from "../services/student.service";
import { CourseService } from "../services/course.service";
import { Enrollement } from "../models/enrollement.model";

const service = new EnrollementService();
const studentsService = new StudentsService();
const courseService = new CourseService();

export function getAllEnrollements(req: Request, res: Response) {
    const enrollements = service.getEnrollements();
    res.status(200).json(enrollements);
}

export function getEnrollementById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const enrollement = service.getEnrollementById(id);
    if (enrollement) {
        res.status(200).json(enrollement);
    } else {
        res.status(404).json({ message: "Curso no encontrado" });
    }
}

export function getEnrollementsByStudentId(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const enrollement = service.getEnrollementsByStudentId(id);
    if (enrollement) {
        res.status(200).json(enrollement);
    } else {
        res.status(404).json({ message: "Curso no encontrado" });
    }
}

export function getEnrollementsByCourseId(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const enrollement = service.getEnrollementsByCourseId(id);
    if (enrollement) {
        res.status(200).json(enrollement);
    } else {
        res.status(404).json({ message: "Curso no encontrado" });
    }
}

export function createEnrollement(req: Request, res: Response) {
    const enrollement: Enrollement = req.body;

    if (!studentsService.getStudentById(enrollement.studentId)) {
        return res
            .status(400)
            .json({ message: "El estudiante indicado no existe" });
    }

    service.createEnrollement(enrollement);
    res.status(201).json({ message: "Curso creado" });
}

export function updateEnrollement(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const data = req.body;

    if (service.getEnrollementById(id)) {
        const updated = service.updateEnrollement(id, data);
        res.status(200).json(updated);
    } else {
        res.status(404).json({ message: "Matrícula no encontrada" });
    }
}

export function deleteEnrollement(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    if (service.getEnrollementById(id)) {
        service.deleteEnrollement(id);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Matrícula no encontrada" });
    }
}
