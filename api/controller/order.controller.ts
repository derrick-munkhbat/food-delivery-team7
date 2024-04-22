import { OrderModel } from "../models/order.model";
import { OrderItemsModel } from "../models/orderItem.models";
import type { Request, Response } from "express";

export async function getOrder(req: any, res: any) {
  const { id } = req.params;
  const orders = await OrderModel.findById({ _id: id });
  res.json(orders);
}

// export async function createOrder(req: any, res: any) {
//   const { userId, phoneNumber, paymentType, orderStatus, amount } = req.body;

//   console.log(req.body);
//   const orders = await OrderModel.create({
//     userId,
//     phoneNumber,
//     paymentType,
//     orderStatus,
//     amount,
//   });
//   res.json(orders);
// }

export async function updateOrder(req: any, res: any) {
  const { _id } = req.params;
  const orders = await OrderModel.updateOne({ _id });
  res.json(orders);
}

export async function deleteOrder(req: any, res: any) {
  const { _id } = req.params;

  await OrderModel.deleteOne({ _id });
  res.sendStatus(204);
}

export async function createOrder(req: Request, res: Response) {
  const {foodId, price, number} = req.body;

  const order = await OrderModel.create({
    creationDate: Date.now()
  });
  res.json(order._id);

  const orderItem = await OrderItemsModel.create({
    orderId: order._id,
    foodId: foodId,
    quantity: number,
    subTotal: price
  });

  res.json(orderItem.orderId);
}

