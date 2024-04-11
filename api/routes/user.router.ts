import express from "express";
import { getUser, createUser, loginUser } from "../controller/user.controller";

const userRouter = express.Router();

userRouter.get("/:id", getUser);
userRouter.post("/create", createUser);
userRouter.post("/login", loginUser);

export default userRouter;
