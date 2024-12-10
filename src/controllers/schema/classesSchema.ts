import Joi from "joi";
import { Request } from "express";

const classesSchema = Joi.object({
  teacher_id: Joi.number().integer().positive().required(),
  user_id: Joi.string().guid({ version: "uuidv4" }).required(),
  scheduled_time: Joi.date().required(),
  duration: Joi.number().integer().positive().required(),
  status: Joi.string().required(),
});

const validate = (schema: Joi.ObjectSchema, req: Request) => {
  const { error } = schema.validate(req.body);
  return error;
};

const validateClasse = (req: Request) => validate(classesSchema, req);

export { validateClasse };
