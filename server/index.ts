import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { config } from "./config/config";
dotenv.config();

const app: Express = express();

mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    console.log("[opea-server]: Connected to MongoDB");
  })
  .catch((e) => {
    console.log(e);
  });

const port = process.env.PORT;
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("hi!");
});

app.listen(port, () => {
  console.log(`[opea-server]: Server is running at http://localhost:${port}`);
});
