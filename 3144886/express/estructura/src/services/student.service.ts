import { Student } from "../models/student.model";

let students: Student[] = [];

export class StudentsService {
    getStudents() {
        return students;
    }

    getStudentById(id: number) {
        return students.find((student) => student.id === id);
    }

    createStudent(enrollement: Student) {
        enrollement.id = students.length + 1;
        students.push(enrollement);
    }

    deleteStudent(id: number) {
        students = students.filter((student) => student.id !== id);
    }

    updateStudent(id: number, data: Partial<Student>) {
        students = students.map((student) =>
            student.id !== id ? student : { ...student, ...data }
        );
        return this.getStudentById(id);
    }
}
