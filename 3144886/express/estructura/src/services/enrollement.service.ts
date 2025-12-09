import { Enrollement } from "../models/enrollement.model";

let enrollements: Enrollement[] = [];

export class EnrollementService {
    getEnrollements() {
        return enrollements;
    }

    getEnrollementById(id: number) {
        return enrollements.find((enrollement) => enrollement.id === id);
    }

    getEnrollementsByStudentId(id: number) {
        return enrollements.find((enrollement) => enrollement.studentId === id);
    }

    getEnrollementsByCourseId(id: number) {
        return enrollements.find((enrollement) => enrollement.courseId === id);
    }

    createEnrollement(enrollement: Enrollement) {
        enrollement.id = enrollements.length + 1;
        enrollements.push(enrollement);
    }

    deleteEnrollement(id: number) {
        enrollements = enrollements.filter(
            (enrollement) => enrollement.id !== id
        );
    }

    updateEnrollement(id: number, data: Partial<Enrollement>) {
        enrollements = enrollements.map((enrollement) =>
            enrollement.id !== id ? enrollement : { ...enrollement, ...data }
        );
        return this.getEnrollementById(id);
    }
}
