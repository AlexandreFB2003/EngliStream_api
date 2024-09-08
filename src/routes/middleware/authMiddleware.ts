import { Request, Response, NextFunction } from "express";
import { supabase } from "../../config/supabase";

export const isAuthenticated = async (
  req: any,
  res: any,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Authorization token missing" });
  }

  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }

  req.user = data.user;
  next();
};
