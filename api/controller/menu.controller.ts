import { MenuModel } from "../models/menu.models";

export async function getMenu(req: Request, res: Response) {
  const {categoryId} = req.query;

  const menus = await MenuModel.find({
    foodCategory: categoryId
  });
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

  try {
    const result = await cloudinary.uploader.upload(foodImg, {
      folder: "FoodPicture"
    });

    const menu = await MenuModel.create({
      foodName,
      foodCategory,
      foodIngredients,
      foodPrice,
      foodSales,
      foodImg: {
        public_id: result.public_id,
        url: result.secure_url
      }
    });
    res.json(menu);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteMenu(req: any, res: any) {
  const { _id } = req.params;

  await MenuModel.deleteOne({ _id });
  res.sendStatus(204);
}
