import express from "express";
import { connectDB } from "./database/connect";
import categoryRouter from "./routes/category.router";
import userRouter from "./routes/user.router";
import foodRouter from "./routes/food.router";
import orderRouter from "./routes/order.router";
import tokenRouter from "./routes/reset-password.router";
import { checkAdmin } from "./middleware/admin";

import cloudinary from "./database/cloudinary";
import type { Request, Response } from "express";
import multer from "multer";
import { nanoid } from "nanoid";

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

// for image

function getExtension(filename: string) {
  const names = filename.split(".");
  if (names.length > 1) {
    return `.${names.pop()}`;
  }
  return "";
}

const upload = multer({
  storage: multer.diskStorage({
    destination: "uploads/",
    filename: function (req, file, cb) {
      const filename = `${nanoid()}${getExtension(file.originalname)}`;
      cb(null, filename);
    },
  }),
});

app.post("/upload", upload.single("file"), async (req: Request, res: Response) => {
  // req.file
  const filePath = req.file?.path;

  if (filePath) {
    const result = await cloudinary.uploader.upload(filePath);
    console.log(result);
    res.json({ url: result.secure_url });
  }
});

app.get("/", (req, res) => {
  res.send("hello team, the backend is running");
});
app.use("/orderItems", orderRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
