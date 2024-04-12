import express from "express";
import { connectDB } from "./database/connect";
import menuRouter from "./routes/menu.router";
import categoryRouter from "./routes/category.router";
import userRouter from "./routes/user.router";
import foodRouter from "./routes/food.router";

const app = express();
var cors = require("cors");
const port = 8000;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/menu", menuRouter);
app.use("/category", categoryRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("hello team, the backend is running");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
