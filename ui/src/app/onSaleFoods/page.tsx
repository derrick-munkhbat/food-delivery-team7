"use client";

import { OnSaleCards } from "@/components/cards/OnSaleCard";
import { Star } from "@/components/icons/Star";

export default function onSaleFoods() {
  return (
    <div>
      <div className=" justify-between w-full mx-auto flex gap-5 container flex-col  px-5 py-5 xl:py-[8px]  xl:px-[5px]">
        <div className="flex gap-3  w-full justify-between">
          <div className="flex gap-3 items-center">
            <Star />
            <h1 className="font-bold text-2xl"> Хямдралтай</h1>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <OnSaleCards />
        </div>
      </div>
    </div>
  );
}
