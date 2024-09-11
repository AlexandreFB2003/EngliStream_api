import { Router } from "express";
import {
  createTeacher,
  deleteTeacher,
  getAllTeachers,
  getTeacherById,
  updateAvailability,
} from "../controllers/teachersController";

const router = Router();

router.post("/", createTeacher);
router.delete("/:id", deleteTeacher);
router.put("/:id", updateAvailability);
router.get("/", getAllTeachers);
router.get("/:email", getTeacherById);
export default router;
