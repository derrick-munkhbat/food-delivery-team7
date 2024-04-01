import mongoose from "mongoose";
const { Schema } = mongoose;

const menuSchema = new Schema({
  foodName: String,
  foodCategory: String,
  foodIngredients: String,
  foodPrice: Number,
  foodSale: Number,
  foodImg: String,
  });

export const MenuModel = mongoose.model("Menu", menuSchema);