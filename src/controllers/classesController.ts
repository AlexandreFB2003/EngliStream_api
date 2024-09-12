import { Request, Response } from "express";
import { create, getAll, getById, remove, update } from "../models/classes";

export const createClass = async (req: Request, res: Response) => {
  try {
    const newClass = await create(req.body);
    res
      .status(201)
      .json({ message: "Class created successfully", post: newClass });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error creating Class", error: error.message });
  }
};

export const getClasses = async (req: Request, res: Response) => {
  try {
    const classes = await getAll();
    res
      .status(200)
      .json({ message: "Classes retrieved successfully", classes });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error retrieving classes", error: error.message });
  }
};

export const getClassById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const classData = await getById(id);

    if (!classData) {
      return res.status(404).json({ message: "Class not found" });
    }

    res
      .status(200)
      .json({ message: "Class retrieved successfully", classData });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error retrieving class", error: error.message });
  }
};

export const updateClass = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const updatedClass = await update(id, req.body);

    if (!updatedClass) {
      return res.status(404).json({ message: "Class not found" });
    }

    res
      .status(200)
      .json({ message: "Class updated successfully", post: updatedClass });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error updating Class", error: error.message });
  }
};

export const deleteClass = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deleted = await remove(id);

    if (!deleted) {
      return res.status(404).json({ message: "Class not found" });
    }

    res.status(200).json({ message: "Class deleted successfully" });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error deleting class", error: error.message });
  }
};
