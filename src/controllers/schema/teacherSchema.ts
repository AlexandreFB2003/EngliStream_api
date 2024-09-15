import Joi from "joi";
import { Request } from "express";

const teacherSchema = Joi.object({
  user_id: Joi.string().guid({ version: "uuidv4" }).required(),
});

const validate = (schema: Joi.ObjectSchema, req: Request) => {
  const { error } = schema.validate(req.body);
  return error;
};

const validateTeacher = (req: Request) => validate(teacherSchema, req);

export { validateTeacher };
