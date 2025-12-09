import { Request, Response } from "express";
import { CourseService } from "../services/course.service";
import { Course } from "../models/course.model";

const service = new CourseService();

export function getAllCourses(req: Request, res: Response) {
    const courses = service.getCourses();
    res.status(200).json(courses);
}

export function getCourseById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const course = service.getCourseById(id);
    if (course) {
        res.status(200).json(course);
    } else {
        res.status(404).json({ message: "Curso no encontrado" });
    }
}

export function createCourse(req: Request, res: Response) {
    const course: Course = req.body;
    service.createCourse(course);
    res.status(201).json({ message: "Curso creado" });
}

export function updateCourse(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const data = req.body;

    if (service.getCourseById(id)) {
        const updated = service.updateCourse(id, data);
        res.status(200).json(updated);
    } else {
        res.status(404).json({ message: "Curso no encontrado" });
    }
}

export function deleteCourse(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    if (service.getCourseById(id)) {
        service.deleteCourse(id);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Curso no encontrado" });
    }
}
