import { CategoryModel } from "../models/category.models";
import { FoodModel } from "../models/food.models";
import type { Request, Response } from "express";

interface IFood {
  name: string;
  category: string;
  ingredients: string;
  price: number;
  sales: number;
  image: string;
}

export async function getFood(req: Request, res: Response) {
  const { categoryId } = req.query;
  const foods = await FoodModel.find({
    category: categoryId,
  }).sort({ sales: -1 });
  res.json(foods);
}

export async function getOneFood(req: Request, res: Response) {
  const { foodId } = req.query;
  const food = await FoodModel.findOne({
    _id: foodId,
  });
  res.json(food);
}

export async function createFood(req: Request, res: Response) {
  const { name, category, ingredients, price, sales, image } = req.body;

  try {
    const food = await FoodModel.create({
      name,
      category,
      ingredients,
      price,
      sales,
      image,
    });
  } catch (error) {
    console.log(error);
  }
}

// try {
//   // const result = await cloudinary.uploader.upload(image, {
//   //   folder: "FoodPicture"
//   // });

//   const food = await FoodModel.create({
//     name,
//     category,
//     ingredients,
//     price,
//     sales,
//     image:
//     // {
//     //   public_id: result.public_id,
//     //   url: result.secure_url
//     // }
//   })
// } catch (error) {
//   console.log(error);
// }

export async function deleteFood(req: Request, res: Response) {
  const { _id } = req.params;

  await FoodModel.deleteOne({ _id });
  res.sendStatus(204);
}

export async function updateFood(req: Request, res: Response) {
  const { _id } = req.params;

  const { name, category, ingredients, price, sales, image } = req.body;

  await FoodModel.findByIdAndUpdate(_id, {
    name: name,
    category: category,
    ingredients: ingredients,
    price: price,
    sales: sales,
    image: image,
  });
  res.sendStatus(204);
}

export async function getFoodsByCategory(req: Request, res: Response) {
  const { categoryId } = req.params;
  console.log(categoryId);

  try {
    const foods = await FoodModel.find({
      categoryId,
    });
    console.log("foods", foods);

    res.json(foods);
  } catch (error) {
    res.json({ message: error });
  }
}
