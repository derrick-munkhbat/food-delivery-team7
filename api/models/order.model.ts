import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
  userId: Schema.Types.ObjectId,
  totalAmount: Number,
  creationDate: Date,
  
  district: String,
  khoroo: String,
  apartment: String,
  additionalInfo: String,
  phoneNumber: String,
  paymentType: {
    type: String,
    enum: ["CASH", "CARD"],
  },
  paymentStatus: {
    type: String,
    enum: ["NOTPAID", "PAID"],
  },
  orderDate: Date,
  deliveryState: {
    type: String,
    enum: ["WATING", "DELIVERED", "ACTIVED", "PROGRESS"],
  },
});

export const OrderModel = mongoose.model("order", orderSchema);
