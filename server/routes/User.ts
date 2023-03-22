import express from "express";
import controller from "../controllers/User";

const app = express.Router();

app.post("/create", controller.createUser);
app.get("/get/:userId", controller.readUser);
app.patch("/update/:authorId", controller.updateUser);
app.delete("/delete/:authorId", controller.deleteUser);

export = app;
