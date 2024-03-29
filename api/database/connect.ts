import mongoose from "mongoose";
import 'dotenv/config'

const connectionString = process.env.MONGO_URL || ''

export const connectDB = async () => {
  try {
    mongoose.connect(connectionString);
    console.log("Connected");
  } catch(error) {
    console.log("Failed", error);
  }
}