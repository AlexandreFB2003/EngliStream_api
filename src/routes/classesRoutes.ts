import { Router } from "express";
import {
  createClass,
  deleteClass,
  getClassById,
  getClasses,
  updateClass,
} from "../controllers/classesController";
import { isAuthenticated } from "./middleware/authMiddleware";

const router = Router();

router.post("/", isAuthenticated, createClass);
router.delete("/:id", isAuthenticated, deleteClass);
router.put("/:id", isAuthenticated, updateClass);
router.get("/", isAuthenticated, getClasses);
router.get("/:id", isAuthenticated, getClassById);

export default router;
