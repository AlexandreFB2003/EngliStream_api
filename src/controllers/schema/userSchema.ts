import Joi from "joi";
import { Request } from "express";

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// Reusable validation function
const validate = (schema: Joi.ObjectSchema, req: Request) => {
  const { error } = schema.validate(req.body);
  return error;
};

const validateUserSignIn = (req: Request) => validate(userSchema, req);
const validateLogin = (req: Request) => validate(loginSchema, req);

export { validateUserSignIn, validateLogin };
