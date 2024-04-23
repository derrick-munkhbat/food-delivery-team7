import express from "express";
import { connectDB } from "./database/connect";
import categoryRouter from "./routes/category.router";
import userRouter from "./routes/user.router";
import foodRouter from "./routes/food.router";
import orderRouter from "./routes/order.router";
import tokenRouter from "./routes/reset-password.router";
import { checkAdmin } from "./middleware/admin";

const app = express();
var cors = require("cors");
const port = 8000;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/food", foodRouter);
app.use("/category", categoryRouter);
app.use("/user", userRouter);
app.use("/order", orderRouter);
app.use("/token", tokenRouter);

app.get("/", (req, res) => {
  res.send("hello team, the backend is running");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
