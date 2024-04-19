const express = require("express");

const {
  getFood,
  getOneFood,
  createFood,
  deleteFood,
  updateFood,
  getFoodsByCategory,
  getManyFood,
} = require("../controller/food.controller");

const foodRouter = express.Router();

foodRouter.get("/:categoryName", getFood);
foodRouter.get("/", getManyFood);
foodRouter.get("/editor", getOneFood);
foodRouter.post("/", createFood);
foodRouter.delete("/delete/:_id", deleteFood);
foodRouter.put("/update/:_id", updateFood);
foodRouter.get("/:categoryId", getFoodsByCategory);

export default foodRouter;
