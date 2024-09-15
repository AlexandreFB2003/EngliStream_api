import Joi from "joi";
import { Request } from "express";

const postsSchema = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
  user_id: Joi.string().guid({ version: "uuidv4" }).required(),
});

const validate = (schema: Joi.ObjectSchema, req: Request) => {
  const { error } = schema.validate(req.body);
  return error;
};

const validatePost = (req: Request) => validate(postsSchema, req);

export { validatePost };
