import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcrypt";
export interface IUser {
  username: string;
  password: string;
}

export interface IUserModel extends Model<IUser> {
  login(username: string, password: string): any;
}

const UserSchema = new Schema<IUser, IUserModel>(
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
  {
    versionKey: false,
  }
);
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.static("login", async function (username, password) {
  const user = await this.findOne({ username });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) return user;
    else throw Error("Incorrect password");
  }
  console.log("Error for user");
  throw Error("Incorrect username");
});
export default mongoose.model<IUser, IUserModel>("User", UserSchema);
