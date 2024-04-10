import { MenuModel } from "../models/menu.models";

export async function getMenu(req: Request, res: Response) {
  const menus = await MenuModel.find();
  res.json(menus);
}

export async function createMenu(req: Request, res: Response) {
  const {
    foodName,
    foodCategory,
    foodIngredients,
    foodPrice,
    foodSales,
    foodImg,
  } = req.body;

  const menu = await MenuModel.create({
    foodName,
    foodCategory,
    foodIngredients,
    foodPrice,
    foodSales,
    foodImg,
  });
  res.json(menu);
}

export async function deleteMenu(req: any, res: any) {
  const { _id } = req.params;

  await MenuModel.deleteOne({ _id });
  res.sendStatus(204);
}

