"use client";
import React, { useEffect, useState } from "react";
import { AddCategory } from "./AddCategory";
import { fetcher } from "../util";
import { CategoryComp } from "./CategoryComp";
import { MenuComp } from "./MenuComp";

export default function AdminMenu() {
  type Category = {
    name: string;
    _id: string;
  };

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetcher("category").then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="bg-split-background">
      <div className="flex container mx-auto w-full">
        <div className="w-1/4 bg-white py-[26px] pr-[26px]">
          <h1 className="text-[22px] text-[#272727] font-bold mb-10">
            Food menu
          </h1>
          <div className="grid gap-[26px] ">
            <CategoryComp />
            <AddCategory />
          </div>
        </div>
        <MenuComp />
      </div>
    </div>
  );
}
