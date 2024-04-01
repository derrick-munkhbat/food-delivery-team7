"use client";
import React from "react";

import { BigAddIcon } from "@/components/icons/BigAddIcon";
import { AddCategory } from "./AddCategory";
import { AddMenu } from "./Add-menu";
import { showModal } from "./Add-menu";

import { DeleteEdit } from "./DeleteEdit";

export default function AdminMenu() {
  return (
    <div className="bg-split-background">
      <div className="flex container mx-auto w-full">
        <div className="w-1/4 bg-white py-[26px] pr-[26px]">
          <h1 className="text-[22px] text-[#272727] font-bold mb-10">
            Food menu
          </h1>
          <div className="grid gap-[26px] ">
            <button className="btn sm:btn-sm md:btn-md bg-white hover:bg-[#18BA51] justify-between">
              <p className="text-lg font-medium">Breakfast</p>
              <DeleteEdit />
            </button>
            <button className="btn sm:btn-sm md:btn-md bg-white hover:bg-[#18BA51] justify-between">
              <p className="text-lg font-medium">Soup</p>
              <DeleteEdit />
            </button>
            <button className="btn sm:btn-sm md:btn-md bg-white hover:bg-[#18BA51] justify-between">
              <p className="text-lg font-medium">Main Course</p>
              <DeleteEdit />
            </button>
            <button className="btn sm:btn-sm md:btn-md bg-white hover:bg-[#18BA51] justify-between">
              <p className="text-lg font-medium">Desserts</p>
              <DeleteEdit />
            </button>
            <AddCategory />
          </div>
        </div>
        <div className="w-3/4 bg-[#F7F7F8] pl-6 py-6">
          <div className="flex justify-between py-4">
            <h1 className="text-[22px] text-[#272727] font-bold ">Breakfast</h1>
            <AddMenu />
          </div>
          <div className="flex flex-col items-center gap-[30px] mt-10">
            <button onClick={showModal}>
              <BigAddIcon />
            </button>
            <p className="text-[#808080]">Уучлаарай, Таны меню хоосон байна.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
