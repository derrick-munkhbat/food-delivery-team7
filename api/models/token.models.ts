import mongoose from "mongoose";
const { Schema } = mongoose;

const tokenSchema = new Schema({
  email: String,
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 300000 },
});

export const TokenModel = mongoose.model("token", tokenSchema);
