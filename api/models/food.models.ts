import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const { Schema } = mongoose;

const foodSchema = new Schema({
  foodName: String,
  foodCategory: ObjectId,
  foodIngredients: String,
  foodPrice: Number,
  foodSale: Number,
  foodImg: String,
});

export const FoodModel = mongoose.model("Food", foodSchema);
