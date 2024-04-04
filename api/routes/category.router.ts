const express = require("express");

const {
  getCategory,
  createCategory,
} = require("../controller/category.controller");

const categoryRouter = express.Router();

categoryRouter.get("/", getCategory);
categoryRouter.post("/", createCategory);
categoryRouter.put("/:id", createCategory);
categoryRouter.delete("/:id", createCategory);

export default categoryRouter;
