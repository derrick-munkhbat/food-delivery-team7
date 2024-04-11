const express = require("express");

const {
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controller/order.controller");

const orderRouter = express.Router();

orderRouter.get("/:id", getOrder);
orderRouter.post("/", createOrder);
orderRouter.put("/:id", updateOrder);
orderRouter.delete("/:id", deleteOrder);

export default orderRouter;
