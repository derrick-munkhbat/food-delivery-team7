"use client"

import { AddMenu } from "./AddMenu";
import { useEffect, useState } from "react";
import { useCategory } from "../globals";
import axios from "axios";

export default function MenuComp() {
  const [ open, setOpen ] = useState(false);
  const { category } : any = useCategory();
  const [ categoryName, setCategoryName ] = useState([]);

  useEffect(() => {
    fetchCategory();
  }, [category]);

  const fetchCategory = () => {
    axios
      .get(`http://localhost:8000/category/${category}`)
      .then((category) => setCategoryName(category.data));
  };

  return (
    <div>
      <div className="flex justify-between py-4">

        <h1 className="text-[22px] text-[#272727] font-bold ">
          {categoryName.name}
        </h1>

        <button
          className="btn sm:btn-sm md:btn-md bg-[#18BA51] text-white no-animation"
          onClick={() => setOpen(true)}
        >
          Add new food
        </button>

      </div>

      <AddMenu open={open} onClose={() => setOpen(false)} />

    </div>
  );
}
