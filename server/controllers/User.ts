import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/User";

const createUser = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    username,
    password,
  });

  return user
    .save()
    .then((user) => res.status(201).json({ user }))
    .catch((e) => {
      res.status(500).json({ e });
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
