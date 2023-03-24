import express from "express";
import controller from "../controllers/Bucket";
import { Schemas, validateWithJoi } from "../middleware/ValidateSchema";

const app = express.Router();

app.post(
  "/create",
  validateWithJoi(Schemas.bucket.create),
  controller.createBucket
);
app.get("/get/:bucketId", controller.readBucket);
app.get("/getUserBuckets/:user", controller.readBucketsByUser);
app.patch(
  "/update/:bucketId",
  validateWithJoi(Schemas.bucket.update),
  controller.updateBucket
);
app.delete("/delete/:bucketId", controller.deleteBucket);

export = app;
