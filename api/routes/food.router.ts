const express = require("express");

const {
  getFood,
  getOneFood,
  createFood,
  deleteFood,
  updateFood
} = require("../controller/food.controller");

const foodRouter = express.Router();

foodRouter.get("/", getFood);
foodRouter.get("/editor", getOneFood);
foodRouter.post("/", createFood);
foodRouter.delete("/delete/:_id", deleteFood);
foodRouter.put("/update/:_id", updateFood);

export default foodRouter;
