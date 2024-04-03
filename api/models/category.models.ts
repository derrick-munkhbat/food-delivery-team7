import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
  categoryName: {
    type: String,
    unique: true,
  },
});

export const CategoryModel = mongoose.model("category", categorySchema);
