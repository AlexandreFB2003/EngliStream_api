import { Router } from "express";
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from "../controllers/postsController";
import { isAuthenticated } from "./middleware/authMiddleware";

const router = Router();

router.post("/", isAuthenticated, createPost);
router.delete("/:id", isAuthenticated, deletePost);
router.put("/:id", isAuthenticated, updatePost);
router.get("/", isAuthenticated, getPosts);
router.get("/:email", isAuthenticated, getPostById);

export default router;
