import { Router } from "express";
import { signUp, login, profile } from "../controllers/authController";
import { isAuthenticated } from "./middleware/authMiddleware";

const router = Router();

router.post("/signup", signUp);
router.post("/login", login);

router.get("/profile", isAuthenticated, profile);

export default router;
