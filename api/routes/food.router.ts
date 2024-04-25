const express = require("express");

const {
  getFoods,
  getOneFood,
  createFood,
  deleteFood,
  updateFood,
  uploadFoodImage,
  getOnSaleFoods,
} = require("../controller/food.controller");

const foodRouter = express.Router();

foodRouter.get("/", getFoods);
foodRouter.get("/editor", getOneFood);
foodRouter.post("/upload", uploadFoodImage);
foodRouter.post("/", createFood);
foodRouter.delete("/:_id", deleteFood);
foodRouter.put("/:_id", updateFood);
foodRouter.get("/saledFoods", getOnSaleFoods);

export default foodRouter;
