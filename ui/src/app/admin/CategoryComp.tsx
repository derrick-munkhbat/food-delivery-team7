import { useState } from "react";
import { DeleteEdit } from "./DeleteEdit";

export function CategoryComp() {
  const [newCategory, setNewCategory] = useState("");

  type Category = {
    name: string;
    _id: string;
  };

  const [categories, setCategories] = useState<Category[]>([]);
  return (
    <div>
      {categories.map((category, index) => (
        <button
          key={index}
          className="btn sm:btn-sm md:btn-md bg-white hover:bg-[#18BA51] justify-between"
        >
          <p className="text-lg font-medium">{category.name}</p>
          <DeleteEdit />
        </button>
      ))}
    </div>
  );
}
