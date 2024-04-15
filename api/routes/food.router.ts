const express = require("express");

const {
  getFood,
  createFood,
  deleteFood,
} = require("../controller/food.controller");

const foodRouter = express.Router();

foodRouter.get("/", getFood);
foodRouter.post("/", createFood);
foodRouter.delete("/delete/:_id", deleteFood);

export default foodRouter;
