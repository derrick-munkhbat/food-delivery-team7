import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: String,
  userEmail: String,
  userPassword: String,
  userNumber: Number,
  userImage: String,
  userAddress: String,
});

export const UserModel = mongoose.model("User", userSchema);
