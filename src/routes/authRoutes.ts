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
router.post("/logout", logout);
router.put("/:id", updateUserAccount);

router.get("/profile", isAuthenticated, profile);
router.delete("/delete", isAuthenticated, deleteUserAccount);

export default router;
