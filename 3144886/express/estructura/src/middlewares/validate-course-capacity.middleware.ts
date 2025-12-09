import { Enrollement } from "../models/enrollement.model";
import { CourseService } from "../services/course.service";
import { NextFunction, Request, Response } from "express";
import { EnrollementService } from "../services/enrollement.service";

const courseService = new CourseService();
const enrollementService = new EnrollementService();

export function validateCourseCapacity(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const enrollement: Enrollement = req.body;
    const course = courseService.getCourseById(enrollement.courseId);

    if (!course) {
        return res.status(400).json({ message: "El curso indicado no existe" });
    }

    const studentsInCourse = enrollementService.studentsInCourse(
        enrollement.courseId
    );

    if (studentsInCourse < course.capacity) {
        next();
    } else {
        return res
            .status(400)
            .json({ message: "El curso ha alcanzado su capacidad máxima" });
    }
}
