import { Router } from "express";
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from "../controllers/postsController";

const router = Router();

router.post("/", createPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);
router.get("/", getPosts);
router.get("/:email", getPostById);
export default router;
