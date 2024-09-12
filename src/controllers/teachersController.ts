import { Request, Response } from "express";
import { create, getAll, getById, remove, update } from "../models/teachers";
import { findUserByEmail } from "../models/user";

export const createTeacher = async (req: Request, res: Response) => {
  const { userId } = req.body;

  try {
    const newTeacher = await create(userId);

    res.status(201).json({
      message: "Teacher created successfully",
      teacher: newTeacher[0],
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Error creating teacher",
      error: error.message,
    });
  }
};

export const deleteTeacher = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedTeacher = await remove(id);

    if (!deletedTeacher.length) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    res.status(200).json({
      message: "Teacher deleted successfully",
      teacher: deletedTeacher[0],
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Error deleting teacher",
      error: error.message,
    });
  }
};

export const getAllTeachers = async (_req: Request, res: Response) => {
  try {
    const teachers = await getAll();

    res.status(200).json({
      message: "Teachers retrieved successfully",
      teachers,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Error retrieving teachers",
      error: error.message,
    });
  }
};

export const getTeacherById = async (req: Request, res: Response) => {
  const { email } = req.params;

  const profileInfo = await findUserByEmail(email);

  try {
    const teacher = await getById(profileInfo?.id);
    console.log("GG TEACHER", teacher);

    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    res.status(200).json({
      message: "Teacher retrieved successfully",
      teacher,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Error retrieving teacher",
      error: error.message,
    });
  }
};

export const updateAvailability = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { availability } = req.body;

  try {
    const updatedTeacher = await update(id, availability);

    if (!updatedTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    res
      .status(200)
      .json({ message: "Teacher updated successfully", post: updatedTeacher });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error updating post", error: error.message });
  }
};
