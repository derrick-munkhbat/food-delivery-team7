import mongoose from "mongoose";
const { Schema } = mongoose;

const tokenSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "user" },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 300000 },
});

export const TokenModel = mongoose.model("token", tokenSchema);
