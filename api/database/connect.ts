import mongoose from "mongoose";
import "dotenv/config";

<<<<<<< HEAD
const connectionString = process.env.MONGO_URL || ''
=======
const connectionString = process.env.MONGO_URL || "";
>>>>>>> eec24e1 (category crud)

const connectionString = process.env.MONGO_URL || ''

export const connectDB = async () => {
  try {
    mongoose.connect(connectionString);
    console.log("Connected");
  } catch (error) {
    console.log("Failed", error);
  }
};
