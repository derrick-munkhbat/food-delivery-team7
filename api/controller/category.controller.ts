import { CategoryModel } from "../models/category.models";

export async function getCategory(req: any, res: any) {
  const categories = await CategoryModel.find();
  res.json(categories);
}

export async function createCategory(req: any, res: any) {
  const { categoryName } = req.body;
  console.log(categoryName);

  const categories = await CategoryModel.create({
    categoryName: categoryName,
  });
  res.json(categories);
}

export async function putCategory(req: any, res: any) {
  // const { categoryName } = req.body;
  // const categories = await CategoryModel.create({
  //   categoryName,
  // });
  // res.json(categories);
}

export async function deleteCategory(req: any, res: any) {
  // const { categoryName } = req.body;
  // const categories = await CategoryModel.create({
  //   categoryName,
  // });
  // res.json(categories);
}
