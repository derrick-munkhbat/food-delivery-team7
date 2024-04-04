import express from "express";
import { getUser , createUser } from "../controller/user.controller";

const userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.post("/create", createUser);

export default userRouter;