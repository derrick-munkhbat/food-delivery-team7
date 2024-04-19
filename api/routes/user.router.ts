import express from "express";
import {
  getUser,
  createUser,
  loginUser,
  updateUser,
} from "../controller/user.controller";

const userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.post("/create", createUser);
userRouter.post("/login", loginUser);
userRouter.put("/:userId", updateUser);

export default userRouter;
