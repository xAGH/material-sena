import { Router } from "express";
import {
    getAllEnrollements,
    getEnrollementById,
    getEnrollementsByStudentId,
    getEnrollementsByCourseId,
    createEnrollement,
    updateEnrollement,
    deleteEnrollement,
} from "../controllers/enrollements.controller";
import { validateCourseCapacity } from "../middlewares/validate-course-capacity.middleware";

const router = Router();

router.get("/", getAllEnrollements);
router.get("/:id", getEnrollementById);
router.get("/students/:id", getEnrollementsByStudentId);
router.get("/courses/:id", getEnrollementsByCourseId);
router.post("/", validateCourseCapacity, createEnrollement);
router.put("/:id", updateEnrollement);
router.delete("/:id", deleteEnrollement);

export default router;
