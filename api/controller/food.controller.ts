import cloudinary from "../database/cloudinary";
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

export async function getFoods(req: Request, res: Response) {
  const { categoryId } = req.query;

  try {
    if (!categoryId) {
      const foods = await FoodModel.find().sort({ sales: -1 });
      res.json(foods);
      return;
    }

    const foods = await FoodModel.find({
      category: categoryId,
    }).sort({ sales: -1 });

    res.json(foods);
  } catch (error) {
    res.json({ message: error });
  }
}

// works on a menu editor

export async function getOneFood(req: Request, res: Response) {
  const { foodId } = req.query;
  const food = await FoodModel.findOne({
    _id: foodId,
  });
  res.json(food);
}

// get featured food

//================== get on sale foods

export async function getOnSaleFoods(req: Request, res: Response) {
  const { size } = req.query;
  const saledFoods = await FoodModel.find({
    sales: {
      $ne: 0,
    },
  })
    .sort({
      sales: 1,
    })
    .limit(Number(size));

  res.json(saledFoods);
}

// create food

export async function uploadFoodImage(req: Request, res: Response) {
  const filePath = req.file?.path;

  if (filePath) {
    const result = await cloudinary.uploader.upload(filePath);
    console.log(result);
    res.json({ url: result.secure_url });
  }
}

export async function createFood(req: Request, res: Response) {
  const { name, category, ingredients, price, sales, image }: IFood = req.body;

  try {
    const food = await FoodModel.create({
      name,
      category,
      ingredients,
      price,
      sales,
      image,
    });
    res.json("success");
  } catch (error) {
    console.log(error);
  }
}

// for image upload

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

// delete food

export async function deleteFood(req: Request, res: Response) {
  const { _id } = req.params;

  await FoodModel.deleteOne({ _id });
  res.sendStatus(204);
}

// edit food

export async function updateFood(req: Request, res: Response) {
  const { _id } = req.params;

  const { name, category, ingredients, price, sales, image } = req.body;

  await FoodModel.findByIdAndUpdate(
    { _id },
    {
      name: name,
      category: category,
      ingredients: ingredients,
      price: price,
      sales: sales,
      image: image,
    }
  );
  res.json("Success");
}
