import express from "express";
import controller from "../controllers/Bucket";

const app = express.Router();

app.post("/create", controller.createBucket);
app.get("/get/:bucketId", controller.readBucket);
app.get("/getUserBuckets/:user", controller.readBucketsByUser);
app.patch("/update/:bucketId", controller.updateBucket);
app.delete("/delete/:bucketId", controller.deleteBucket);

export = app;
