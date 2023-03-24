import Joi, { ObjectSchema } from "joi";
import { NextFunction, Request, Response } from "express";
import { IUser } from "../models/User";
import { IBucket } from "../models/Bucket";

export const validateWithJoi = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);

      next();
    } catch (e) {
      console.error(e);

      return res.status(422).json({ e });
    }
  };
};

const userSchema = {
  username: Joi.string().alphanum().min(4).max(15).required(),
  password: Joi.string().pattern(
    new RegExp("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)")
  ),
};
const bucketSchema = {
  name: Joi.string().alphanum().min(4).max(15).required(),
  description: Joi.string().alphanum().min(4).max(15).required(),
};

export const Schemas = {
  user: {
    create: Joi.object<IUser>(userSchema),
    update: Joi.object<IUser>(userSchema),
  },
  bucket: {
    create: Joi.object<IBucket>(bucketSchema),
    update: Joi.object<IBucket>(bucketSchema),
  },
};
