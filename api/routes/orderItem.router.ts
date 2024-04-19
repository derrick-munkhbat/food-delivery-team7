const express = require("express");

const {
  getOrderItems,
  createOrderItem,
  updateOrderItems,
  deleteOrderItem,
} = require("../controller/order.controller");

const orderRouter = express.Router();

orderRouter.get("/:id", getOrderItems);
orderRouter.post("/", createOrderItem);
orderRouter.put("/:id", updateOrderItems);
orderRouter.delete("/:id", deleteOrderItem);

export default orderRouter;
