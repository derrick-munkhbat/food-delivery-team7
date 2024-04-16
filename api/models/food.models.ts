import mongoose from "mongoose";

const { Schema } = mongoose;

const foodSchema = new Schema({
  name: String,
  category: Schema.Types.ObjectId,
  ingredients: String,
  price: Number,
  sales: Number,
  image: {
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

export const FoodModel = mongoose.model("Food", foodSchema);
