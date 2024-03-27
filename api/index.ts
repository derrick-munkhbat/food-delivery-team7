import express from "express";
import mongoose from "mongoose";
<<<<<<< HEAD

const connectionString = "mongodb+srv://bganaa0419:iELB55cozoCM8Gm2@food-delivery.ppokdxp.mongodb.net/?retryWrites=true&w=majority&appName=food-delivery"

const connectDB = async () => {
  try {
    mongoose.connect(connectionString);
    console.log("Connected");
  } catch(error) {
    console.log("Failed", error);
  }
}


=======
>>>>>>> b17aa57f6d51238357f4f4c0178a96dcad512f23

const app = express();

const port = "3000";

app.get("/", (req, res) => {
  res.send("hello team, the backend is running");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
