import express from "express";
import mongoose from "mongoose";

const connectionString = "mongodb+srv://bganaa0419:iELB55cozoCM8Gm2@food-delivery.ppokdxp.mongodb.net/?retryWrites=true&w=majority&appName=food-delivery"

const connectDB = async () => {
  try {
    mongoose.connect(connectionString);
    console.log("Connected");
  } catch(error) {
    console.log("Failed", error);
  }
}



const app = express();

const port = "3000";

app.get("/", (req, res) => {
  res.send("hello team, the backend is running");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
