import { Request, Response} from "express"
import { CourseService } from "../services/course.service"

const service = new CourseService()

export function getAllCourses(req: Request, res: Response) {
    const courses = service.getCourses()
    res.status(200).json(courses)
}

export function getCourseById(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const course = service.getCourseById(id)
    if (course) {
        res.status(200).json(course)
    } else {
        res.status(404).json({message: "Curso no encontrado"})
    }
}

export function createCourse() {

}

export function updateCourse() {

}

export function deleteCourse() {

}