import { createToken, resetPassword } from "../controller/token.controller";
import express from "express";

const tokenRouter = express.Router();

tokenRouter.post("/", createToken);
tokenRouter.put("/resetPassword", resetPassword);

export default tokenRouter;
