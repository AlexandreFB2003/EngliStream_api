import { Router } from "express";
import {
  signUp,
  login,
  profile,
  logout,
  deleteUserAccount,
} from "../controllers/authController";
import { isAuthenticated } from "./middleware/authMiddleware";

const router = Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logout);

router.get("/profile", isAuthenticated, profile);
router.post("/delete", isAuthenticated, deleteUserAccount);

export default router;
