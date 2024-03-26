import express from "express";
import mongoose from "mongoose";

const app = express();

const port = "3000";

app.get("/", (req, res) => {
  res.send("hello team, the backend is running");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
