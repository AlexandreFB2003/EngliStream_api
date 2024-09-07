import { Request, Response } from "express";
import { supabase } from "../config/supabase";
import { createUser, findUserByEmail } from "../models/user";
import { validateUserInput } from "./schema/userSchema";

export const signUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  const inputValidationError = validateUserInput(req);

  if (inputValidationError) {
    return res.status(400).json({ message: inputValidationError?.message });
  }

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  await createUser(email, password);
  res.status(200).json({
    message:
      "Sign-up successful. Please check your email to confirm your account.",
    user: data.user,
  });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  const inputValidationError = validateUserInput(req);

  if (inputValidationError) {
    return res.status(400).json({ message: inputValidationError?.message });
  }

  if (error) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  res.status(200).json({
    message: "Login successful",
    user: data.user,
    token: data.session?.access_token,
  });
};

export const profile = async (req: any, res: any) => {
  const user = req.user;

  res.status(200).json({
    message: "Profile fetched successfully",
    user: user,
  });
};

export const logout = async (req: any, res: any) => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  res.status(200).json({ message: "Logout successful" });
};
