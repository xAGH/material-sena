import { Course } from "../models/course.model";

export class CourseService {

    private courses: Course[] = []

    getCourses() {
        return this.courses
    }

    getCourseById(id: number) {
        return this.courses.find(course => course.id === id)
    }

}