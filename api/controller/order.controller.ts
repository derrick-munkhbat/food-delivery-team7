import { OrderModel } from "../models/order.model";

export async function getOrder(req: any, res: any) {
  const { id } = req.params;
  const orders = await OrderModel.findById({ _id: id });
  res.json(orders);
}

export async function createOrder(req: any, res: any) {
  const { userId, phoneNumber, paymentType, orderStatus, amount } = req.body;

  console.log(req.body);
  const orders = await OrderModel.create({
    userId,
    phoneNumber,
    paymentType,
    orderStatus,
    amount,
  });
  res.json(orders);
}

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
