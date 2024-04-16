import mongoose from "mongoose";
import "dotenv/config";

const connectionString =
  "mongodb+srv://derrickmunkhbat:jcTg60rEMEnq2Zws@food-delivery.ppokdxp.mongodb.net/?retryWrites=true&w=majority&appName=food-delivery";

export const connectDB = async () => {
  try {
    mongoose.connect(connectionString);
    console.log("Connected");
  } catch (error) {
    console.log("Failed", error);
  }
};
