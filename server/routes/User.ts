import express from "express";
import controller from "../controllers/User";
import { Schemas, validateWithJoi } from "../middleware/ValidateSchema";

const app = express.Router();
app.post(
  "/create",
  validateWithJoi(Schemas.user.create),
  controller.createUser
);
app.get("/get/:userId", controller.readUserById);
app.post("/auth/", controller.authenticateUser);
app.patch(
  "/update/:userId",
  validateWithJoi(Schemas.user.update),
  controller.updateUser
);
app.delete("/delete/:userId", controller.deleteUser);

export = app;
