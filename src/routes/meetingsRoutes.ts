import { Router } from "express";
import {
  createMeetings,
  deleteMeeting,
  getMeetingById,
  getMeetings,
  updateMeeting,
} from "../controllers/meetingsController";
import { isAuthenticated } from "./middleware/authMiddleware";

const router = Router();

router.post("/", isAuthenticated, createMeetings);
router.delete("/:id", isAuthenticated, deleteMeeting);
router.put("/:id", isAuthenticated, updateMeeting);
router.get("/", isAuthenticated, getMeetings);
router.get("/:id", isAuthenticated, getMeetingById);

export default router;
