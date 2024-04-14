"use client";
import React, { useEffect, useState } from "react";

import { CategoryList } from "./CategoryList";

import { MenuComp } from "./MenuComp";

export default function AdminMenu() {
  const [category, setCategory] = useState("6615dfdf7b3a26bc39bd9e01");

  function selectCategory(selectedCategory: string) {
    setCategory(selectedCategory);
    // console.log(category);
  }

  return (
    <div className="bg-split-background">
      <div className="flex container mx-auto w-full">
        <div className="w-1/4 bg-white py-[26px] pr-[26px]">
          <h1 className="text-[22px] text-[#272727] font-bold mb-10">
            Food menu
          </h1>
          <div className="grid gap-[26px] ">
            <CategoryList selectCategory={selectCategory} />
          </div>
        </div>
        <MenuComp category={category}/>
      </div>
    </div>
  );
}
