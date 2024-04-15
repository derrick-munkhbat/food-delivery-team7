import { FoodModel } from "../models/food.models";

export async function getFood(req: Request, res: Response) {
  const menus = await FoodModel.find();
  res.json(menus);
}

export async function createFood(req: Request, res: Response) {
  const {
    foodName,
    foodCategory,
    foodIngredients,
    foodPrice,
    foodSales,
    foodImg,
  } = req.body;

  const menu = await FoodModel.create({
    foodName,
    foodCategory,
    foodIngredients,
    foodPrice,
    foodSales,
    foodImg,
  });
  res.json(menu);
}

export async function deleteFood(req: any, res: any) {
  const { _id } = req.params;

  await FoodModel.deleteOne({ _id });
  res.sendStatus(204);
}
