import { FoodModel } from "../models/food.models";

interface IFood {
  name: string;
  category: string;
  ingredients: string;
  price: number;
  sales: number;
  image: string;
}

export async function getFood(req: Request, res: Response) {
  const {categoryId} = req.query;
  const foods = await FoodModel.find({
    category: categoryId
  });
  res.json(foods);
}

export async function createFood(req: Request, res: Response) {
  const {
    name,
    category,
    ingredients,
    price,
    sales,
    image,
  } = req.body;

  try {
    const food = await FoodModel.create({
      name,
      category,
      ingredients,
      price,
      sales,
      image
    })
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

export async function deleteFood(req: any, res: any) {
  const { _id } = req.params;

  await FoodModel.deleteOne({ _id });
  res.sendStatus(204);
}
