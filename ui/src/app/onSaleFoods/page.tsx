"use client";

import { OnSaleCards } from "@/components/cards/OnSaleCard";
import { Star } from "@/components/icons/Star";
import { FaChevronRight } from "react-icons/fa";

export default function OnSaleFoods() {
  return (
    <div>
      <div className="flex">
        <div className=" justify-between w-full mx-auto flex  container flex-col px-5 py-5 xl:py-[8px] xl:px-[5px]">
          <div className="flex gap-3 w-full justify-between">
            <div className="flex gap-3 items-center">
              <Star />
              <h1 className="font-bold text-2xl"> Хямдралтай</h1>
            </div>
            <div className="flex items-center text-[#18BA51] font-normal text-sm">
              <a href="/">Back</a>
              <FaChevronRight />
            </div>
          </div>
        </div>
      </div>
      <OnSaleCards />
    </div>
  );
}
