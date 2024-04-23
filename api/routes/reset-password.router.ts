import { createToken } from "../controller/reset-password.controller";

const express = require("express");

const tokenRouter = express.Router();

tokenRouter.post("/", createToken);

export default tokenRouter;
