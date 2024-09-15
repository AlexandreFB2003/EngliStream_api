import Joi from "joi";
import { Request } from "express";

const meetingsSchema = Joi.object({
  class_id: Joi.number().integer().positive().required(),
  meeting_url: Joi.string().required(),
  start_time: Joi.date().required(),
  end_time: Joi.date().required(),
  expired_at: Joi.date().required(),
});

const validate = (schema: Joi.ObjectSchema, req: Request) => {
  const { error } = schema.validate(req.body);
  return error;
};

const validateMeeting = (req: Request) => validate(meetingsSchema, req);

export { validateMeeting };
