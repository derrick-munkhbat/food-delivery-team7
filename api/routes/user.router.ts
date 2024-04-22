import express from "express";
import { getUser, createUser, loginUser } from "../controller/user.controller";
import { checkAdmin } from "../middleware/admin";

const userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.post("/create", createUser);
userRouter.post("/login", loginUser);

export default userRouter;
