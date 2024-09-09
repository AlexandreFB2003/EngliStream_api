import { Router } from "express";
import {
  createTeacher,
  deleteTeacher,
  getAllTeachers,
  getTeacherById,
} from "../controllers/teachersController";

const router = Router();

router.post("/create", createTeacher);
router.post("/remove", deleteTeacher);
router.get("/getAll", getAllTeachers);
router.get("/getById", getTeacherById); // ajustar como pegar o id

export default router;
