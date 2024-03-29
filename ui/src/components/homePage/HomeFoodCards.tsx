import React from "react";
import { OnSaleCards } from "../cards/OnSaleCard";
import { Star } from "../icons/Star";
import { FaChevronRight } from "react-icons/fa";

export function HomeFoodCards() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const MainMenuFoods = [
    {
      title: "Хямдралтай",
      seeAll: "Бүгдийг харах",
    },
    {
      title: "Үндсэн хоол",
      seeAll: "Бүгдийг харах",
    },
    {
      title: "Салад ба зууш",
      seeAll: "Бүгдийг харах",
    },
    {
      title: "Амттан",
      seeAll: "Бүгдийг харах",
    },
  ];

  return (
    <div className="flex sm:p-8 md:p-25 xl:p-32">
      <div className=" flex-col mx-auto  gap-[47px] grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-1">
        {MainMenuFoods.slice(currentIndex, currentIndex + 4).map(
          (MainMenuFoods, index) => (
            <div>
              <div className="flex gap-3  w-full justify-between" key={index}>
                <div className="flex gap-3 items-center">
                  <Star />
                  <h1 className="font-bold text-2xl"> {MainMenuFoods.title}</h1>
                </div>
                <div className="flex items-center text-[#18BA51] font-normal text-sm">
                  <a href="/onSaleFoods">{MainMenuFoods.seeAll}</a>
                  <FaChevronRight />
                </div>
              </div>
              <div className="flex gap-28 justify-center">
                <OnSaleCards />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
