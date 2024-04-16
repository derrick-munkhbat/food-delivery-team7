import { CategoryModel } from "../models/category.models";

export async function getCategory(req: any, res: any) {
  const categories = await CategoryModel.find();
  res.json(categories);
}

export async function getOneCategory(req: Request, res: Response) {
  const {_id} = req.params;
  const category = await CategoryModel.findById({_id}, "name");
  res.json(category);
}

export async function createCategory(req: any, res: any) {
  const { name } = req.body;
  console.log(name);

  const categories = await CategoryModel.create({
    name: name,
  });
  res.json(categories);
}

export async function updateCategory(req: any, res: any) {
  const { _id } = req.params;
  const { name } = req.body;
  const categories = await CategoryModel.findByIdAndUpdate(_id, {
    name: name,
  });
  res.json(categories);
  console.log(name);
}

export async function deleteCategory(req: any, res: any) {
  const { _id } = req.params;

  await CategoryModel.deleteOne({ _id });
  res.sendStatus(204);
}
