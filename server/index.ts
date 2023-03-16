import express, { Express, NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { config } from "./config/config";
dotenv.config();

const app: Express = express();

const port = process.env.PORT;
const corsOptions = {
  origin: "http://localhost:3000",
};

mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    console.log("[opea-server]: Connected to MongoDB");
    startServer();
  })
  .catch((e) => {
    console.log(e);
  });

const startServer = () => {
  app.use((req, res, next) => {
    console.log(
      `[opea-server]: Method: [${req.method}] - Url: [${req.url}] - IP[${req.socket.remoteAddress}]`
    );
    res.on("finish", () => {
      console.log(
        `[opea-server]: Method: [${req.method}] - Url: [${req.url}] - IP[${req.socket.remoteAddress}]`
      );
    });
    next();
  });

  app.use(cors(corsOptions));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/ping", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hi!");
  });

  app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error("Resource not found");
    console.error(error);

    return res.status(404).json({ message: error.message });
  });

  app.listen(port, () => {
    console.log(`[opea-server]: Server is running at http://localhost:${port}`);
  });
};
