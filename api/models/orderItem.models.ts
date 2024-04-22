import mongoose from "mongoose";

const { Schema } = mongoose;

const orderItemsSchema = new Schema({
    orderId: Schema.Types.ObjectId,
    foodId: Schema.Types.ObjectId,
    quantity: Number,
    subTotal: Number
});

export const OrderItemsModel = mongoose.model("OrderItems", orderItemsSchema);