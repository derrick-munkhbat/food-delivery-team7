import axios from "axios";
import { useEffect, useState } from "react";
import { DeleteIcon } from "../icons/DeleteIcon";
import { EditorMenu } from "@/app/admin/EditorMenu";
import { useCategory, useFood } from "@/app/globals";


export function AdminCard() {
  const { foods, setFoods } : any = useFood();
  const { category } : any = useCategory();

  useEffect(() => {
    fetchFood();
  }, []);

  function fetchFood() {
    axios.get(`http://localhost:8000/food?categoryId=${category}`)
      .then(foods => setFoods(foods.data));
  };

  const deleteFood = async (_id : string) => {
    await axios.delete(`http://localhost:8000/food/delete/${_id}`).then(() => {
      fetchFood();
    });
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 justify-items-center gap-[60px] mt-10 mb-5">
      {foods.map((food : any) => (
        <div className="grid gap-[14px]" key={food._id}>
          <div className="w-[282px]">
            <div className="bg-[url('/images/menuZurag.jpg')] grid items-center justify-items-center group-hover:opacity-60 h-[186px]  duration-300  rounded-2xl ease-in-out  bg-center w-[282px]">
              <div className="flex gap-2 opacity-0 hover:opacity-100 transition-all">
                <EditorMenu _id = {food._id}/>
                <button
                  className="z-20 s-10 rounded-xl px-4 py-1 bg-white"
                  onClick={() => deleteFood(food._id)}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
          <div className="gap-1">
            <p className="text-xl font-semibold text-black">{food.name}</p>
            <p className="text-lg font-semibold text-[#18BA51] ">
              {food.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}