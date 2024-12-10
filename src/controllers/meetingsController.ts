import { Request, Response } from "express";
import { create, getAll, getById, remove, update } from "../models/meetings";
import { validateMeeting } from "./schema/meetingsSchema";

export const createMeetings = async (req: Request, res: Response) => {
  try {
    const inputValidationError = validateMeeting(req);

    if (inputValidationError) {
      return res.status(400).json({ message: inputValidationError?.message });
    }
    const newMeeting = await create(req.body);
    res
      .status(201)
      .json({ message: "Meeting created successfully", post: newMeeting });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error creating Meeting", error: error.message });
  }
};

export const getMeetings = async (req: Request, res: Response) => {
  try {
    const meetings = await getAll();
    res
      .status(200)
      .json({ message: "Meetings retrieved successfully", meetings });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error retrieving meetings", error: error.message });
  }
};

export const getMeetingById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const meeting = await getById(id);

    if (!meeting) {
      return res.status(404).json({ message: "Meeting not found" });
    }

    res
      .status(200)
      .json({ message: "Meeting retrieved successfully", meeting });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error retrieving meeting", error: error.message });
  }
};

export const updateMeeting = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const updatedMeeting = await update(id, req.body);

    if (!updatedMeeting) {
      return res.status(404).json({ message: "Meeting not found" });
    }

    res
      .status(200)
      .json({ message: "Meeting updated successfully", post: updatedMeeting });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error updating Meeting", error: error.message });
  }
};

export const deleteMeeting = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deleted = await remove(id);

    if (!deleted) {
      return res.status(404).json({ message: "Meeting not found" });
    }

    res.status(200).json({ message: "Meeting deleted successfully" });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error deleting meeting", error: error.message });
  }
};
