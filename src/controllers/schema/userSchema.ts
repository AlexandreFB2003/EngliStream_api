import Joi from "joi";

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const validateUserInput = (req: any) => {
  const { error } = userSchema.validate(req.body);
  return error;
};

export { userSchema, validateUserInput };
