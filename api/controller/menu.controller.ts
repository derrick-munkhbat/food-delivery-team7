import { MenuModel } from "../models/menu.models";

export async function getMenu(req, res) {
  const menus = await MenuModel.find();
  res.json(menus);
}

export async function createMenu(req, res) {
    const {foodName, foodCategory, foodIngredients, foodPrice, foodSales, foodImg} = req.body;
    const menu = await MenuModel.create({
        foodName,
        foodCategory,
        foodIngredients,
        foodPrice,
        foodSales,
        foodImg
    });
    res.json(menu);
}