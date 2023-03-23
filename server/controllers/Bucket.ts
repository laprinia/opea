import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Bucket from "../models/Bucket";

const createBucket = (req: Request, res: Response, next: NextFunction) => {
  const {
    user,
    name,
    description,
    hexColors,
    preferredColorFormat,
    preferredColorOutput,
  } = req.body;

  const bucket = new Bucket({
    _id: new mongoose.Types.ObjectId(),
    user,
    name,
    description,
    hexColors,
    preferredColorFormat,
    preferredColorOutput,
  });

  return bucket
    .save()
    .then((bucket) => res.status(201).json({ bucket }))
    .catch((e) => {
      res.status(500).json({ e });
    });
};
const readBucket = (req: Request, res: Response, next: NextFunction) => {
  const bucketId = req.params.bucketId;

  return Bucket.findById(bucketId)
    .populate("user")
    .then((bucket) =>
      bucket
        ? res.status(200).json({ bucket })
        : res.status(404).json({ message: "Not found" })
    )
    .catch((e) => {
      res.status(500).json({ e });
    });
};
const readBucketsByUser = (req: Request, res: Response, next: NextFunction) => {
  const specificUser: any = req.params.user;

  return Bucket.find({ user: specificUser })
    .then((buckets) =>
      buckets
        ? res.status(200).json({ buckets })
        : res.status(404).json({ message: "Not found" })
    )
    .catch((e) => {
      res.status(500).json({ e });
    });
};
const updateBucket = (req: Request, res: Response, next: NextFunction) => {
  const bucketId = req.params.bucketId;

  return Bucket.findById(bucketId)
    .then((bucket) => {
      if (bucket) {
        bucket.set(req.body);
        return bucket
          .save()
          .then((bucket) => res.status(201).json({ bucket }))
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
const deleteBucket = (req: Request, res: Response, next: NextFunction) => {
  const bucketId = req.params.bucketId;

  return Bucket.findByIdAndDelete(bucketId).then((bucket) =>
    bucket
      ? res.status(201).json({ message: "Deleted" })
      : res.status(401).json({ message: "Not found" })
  );
};

export default {
  createBucket,
  readBucket,
  readBucketsByUser,
  updateBucket,
  deleteBucket,
};
