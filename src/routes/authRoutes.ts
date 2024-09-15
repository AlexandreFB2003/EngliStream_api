import { Router } from "express";
import {
  signUp,
  login,
  profile,
  logout,
  deleteUserAccount,
  updateUserAccount,
} from "../controllers/authController";
import { isAuthenticated } from "./middleware/authMiddleware";

const router = Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", isAuthenticated, logout);
router.put("/update", isAuthenticated, updateUserAccount);

router.get("/profile", isAuthenticated, profile);
router.delete("/delete", isAuthenticated, deleteUserAccount);

export default router;
