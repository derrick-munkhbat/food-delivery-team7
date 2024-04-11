import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
  userId: String,
  phoneNumber: String,
  paymentType: {
    type: String,
    enum: ["CASH", "CARD"],
  },
  orderStatus: {
    type: String,
    enum: ["NOTPAID", "PAID"],
  },
  deliveryState: {
    type: String,
    enum: ["WATING", "DELIVERED", "ACTIVED", "PROGRESS"],
  },
  totalAmount: Number,
});

export const OrderModel = mongoose.model("order", orderSchema);
