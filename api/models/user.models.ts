import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  Name: String,
  Email: String,
  Password: String,
  Number: Number,
  Image: String,
  Address: String,
  Role: String,
});

export const UserModel = mongoose.model("User", userSchema);
