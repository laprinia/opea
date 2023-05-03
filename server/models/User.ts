import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";
export interface IUser {
  username: string;
  password: string;
}

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      index: { unique: true },
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  { versionKey: false }
);
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
});

export default mongoose.model<IUserModel>("User", UserSchema);
