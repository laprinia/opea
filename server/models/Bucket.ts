import {
  ColorFormats,
  ColorFormatsArray,
  ColorOutputs,
  ColorOutputsArray,
} from "../consts";
import mongoose, { Schema, Document } from "mongoose";

export interface IBucket {
  name: string;
  description: string;
  hexColors: string[];
  preferredColorFormat: ColorFormats;
  preferredColorOutput: ColorOutputs;
}

export interface IBucketModel extends IBucket, Document {}
const BucketSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    hexColors: { type: [String], required: true },
    preferredColorFormat: { type: String, enum: ColorFormatsArray },
    preferredColorOutput: { type: String, enum: ColorOutputsArray },
  },
  { versionKey: false }
);

export default mongoose.model<IBucketModel>("Bucket", BucketSchema);
