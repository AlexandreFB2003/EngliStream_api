import { Request, Response } from "express";
import { create, getAll, getById, remove, update } from "../models/posts";
import { validatePost } from "./schema/postsSchema";

export const createPost = async (req: Request, res: Response) => {
  try {
    const inputValidationError = validatePost(req);

    if (inputValidationError) {
      return res.status(400).json({ message: inputValidationError?.message });
    }
    const newPost = await create(req.body);

    res
      .status(201)
      .json({ message: "Post created successfully", post: newPost });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error creating post", error: error.message });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await getAll();
    res.status(200).json({ message: "Posts retrieved successfully", posts });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error retrieving posts", error: error.message });
  }
};

export const getPostById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const post = await getById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post retrieved successfully", post });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error retrieving post", error: error.message });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const updatedPost = await update(id, req.body);

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res
      .status(200)
      .json({ message: "Post updated successfully", post: updatedPost });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error updating post", error: error.message });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deleted = await remove(id);

    if (!deleted) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error deleting post", error: error.message });
  }
};
