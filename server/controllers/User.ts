import { NextFunction, Request, response, Response } from "express";
import mongoose from "mongoose";
import User from "../models/User";
import dotenv from "dotenv";
import { JWT_MAX_AGE } from "../consts";
const jwt = require("jsonwebtoken");
dotenv.config();

const createToken = (id: number) => {
  return jwt.sign({ id }, process.env.JWT_ID, {
    expiresIn: JWT_MAX_AGE,
  });
};
const createUser = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    username,
    password,
  });

  return user
    .save()
    .then((user) => {
      const token = createToken(user._id);
      res.cookie("jwt", token, {
        httpOnly: false,
        maxAge: JWT_MAX_AGE * 1000,
      });
      res.status(201).json({ user });
    })
    .catch((e) => {
      let errorMessage = "";
      if (e.code === 11000) {
        errorMessage = `"username" is already a swatcher`;
      } else if (e.code === 422) {
        errorMessage = e.description;
      } else {
        errorMessage = `unknown error occurred`;
      }
      res.status(500).json({ errorMessage });
    });
};
const readUser = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;

  return User.findById(userId)
    .then((user) =>
      user
        ? res.status(200).json({ user })
        : res.status(404).json({ message: "Not found" })
    )
    .catch((e) => {
      res.status(500).json({ e });
    });
};
const updateUser = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;

  return User.findById(userId)
    .then((user) => {
      if (user) {
        user.set(req.body);
        return user
          .save()
          .then((user) => res.status(201).json({ user }))
          .catch((e) => {
            res.status(500).json({ e });
          });
      } else {
        res.status(404).json({ message: "Not found" });
      }
    })
    .catch((e) => {
      res.status(500).json({ e });
    });
};
const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;

  return User.findByIdAndDelete(userId).then((user) =>
    user
      ? res.status(201).json({ message: "Deleted" })
      : res.status(401).json({ message: "Not found" })
  );
};

export default { createUser, readUser, updateUser, deleteUser };
