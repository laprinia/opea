import { NextFunction, Response } from "express";
import User from "../models/User";

const jwt = require("jsonwebtoken");
export const checkUser = (req: any, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(
      token,
      process.env.JWT_ID,
      async (error: any, decodedToken: any) => {
        if (error) {
          res.json({ status: false });
        } else {
          const user = await User.findById(decodedToken.id);
          if (user) res.json({ status: true, user: user.username });
          else res.json({ status: false });
        }
      }
    );
  }
};
