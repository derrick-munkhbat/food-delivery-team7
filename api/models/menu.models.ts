import mongoose from "mongoose";

const { Schema } = mongoose;

const menuSchema = new Schema({
  foodName: String,
  foodCategory: Schema.Types.ObjectId,
  foodIngredients: String,
  foodPrice: Number,
  foodSale: Number,
  foodImg: {
    public_id: {
      type: String,
      require: true
    },
    url: {
      type: String,
      require: true
    }
  },
});

export const MenuModel = mongoose.model("Menu", menuSchema);
