import { Course } from "../models/course.model";

let courses: Course[] = [];

export class CourseService {
    getCourses() {
        return courses;
    }

    getCourseById(id: number) {
        return courses.find((course) => course.id === id);
    }

    createCourse(course: Course) {
        course.id = courses.length + 1;
        courses.push(course);
    }

    deleteCourse(id: number) {
        courses = courses.filter((course) => course.id !== id);
    }

    updateCourse(id: number, data: Partial<Course>) {
        courses = courses.map((course) =>
            course.id !== id ? course : { ...course, ...data }
        );
        return this.getCourseById(id);
    }
}
