"use client"

import { BigAddIcon } from "@/components/icons/BigAddIcon";
import { AddMenu } from "./AddMenu";
import { AdminCard } from "@/components/cards/AdminCard";
import { useEffect, useState } from "react";
import { useCategory, useFood } from "../globals";
import axios from "axios";

export default function MenuComp() {
  const [open, setOpen] = useState(false);
  const { category }: any = useCategory();
  const { foods }: any = useFood();
  const [categoryInfo, setCategoryInfo] = useState([]);

  useEffect(() => {
    fetchCategory();
  }, [category]);

  const fetchCategory = () => {
    axios
      .get(`http://localhost:8000/category/${category}`)
      .then((category) => setCategoryInfo(category.data));
  };

  return (
    <div className="w-3/4 bg-[#F7F7F8] pl-6 py-6">
      <div className="flex justify-between py-4">
        <h1 className="text-[22px] text-[#272727] font-bold ">
          {categoryInfo.name}
        </h1>
        <button
          className="btn sm:btn-sm md:btn-md bg-[#18BA51] text-white no-animation"
          onClick={() => setOpen(true)}
        >
          Add new food
        </button>
      </div>

      {foods.length === 0 && (
        <div className="flex flex-col items-center gap-[30px] mt-10">
          <button onClick={() => setOpen(true)}>
            <BigAddIcon />
          </button>
          <p className="text-[#808080]">Уучлаарай, Таны меню хоосон байна.</p>
        </div>
      )}

      <AdminCard />

      <AddMenu open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
