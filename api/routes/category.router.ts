const express = require("express");

const {
  getCategory,
  createCategory,
  deleteCategory,
  updateCategory,
  getOneCategory
} = require("../controller/category.controller");

const categoryRouter = express.Router();

categoryRouter.get("/", getCategory);
categoryRouter.get("/:_id", getOneCategory);
categoryRouter.post("/", createCategory);
categoryRouter.put("/:_id", updateCategory);
categoryRouter.delete("/:_id", deleteCategory);

export default categoryRouter;
