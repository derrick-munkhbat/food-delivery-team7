const express = require("express");

const {
  getFoods,
  getOneFood,
  createFood,
  deleteFood,
  updateFood,
} = require("../controller/food.controller");

const foodRouter = express.Router();

foodRouter.get("/", getFoods);
foodRouter.get("/editor", getOneFood);
foodRouter.post("/", createFood);
foodRouter.delete("/:_id", deleteFood);
foodRouter.put("/:_id", updateFood);

export default foodRouter;
