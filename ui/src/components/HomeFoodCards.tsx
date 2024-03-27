import { Card } from "./cards/Card";
import { Star } from "./icons/Star";
import { FaChevronRight } from "react-icons/fa";

export function HomeFoodCards() {
  return (
    <>
      <div className=" justify-between w-full mx-auto flex gap-5 container flex-col  px-5 py-5 xl:py-[8px]  xl:px-[5px]">
        <div className="flex gap-3  w-full justify-between">
          <div className="flex gap-3 items-center">
            <Star />
            <h1 className="font-bold text-2xl"> Хямдралтай</h1>
          </div>
          <div className="flex items-center text-[#18BA51] font-normal text-sm">
            <p>Бүгдийг харах</p>
            <FaChevronRight />
          </div>
        </div>
        <div className="flex gap-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className=" justify-between w-full mx-auto flex gap-5 container flex-col  px-5 py-5 xl:py-[8px]  xl:px-[5px]">
        <div className="flex gap-3  w-full justify-between">
          <div className="flex gap-3 items-center">
            <Star />
            <h1 className="font-bold text-2xl"> Үндсэн хоол</h1>
          </div>
          <div className="flex items-center text-[#18BA51] font-normal text-sm">
            <p>Бүгдийг харах</p>
            <FaChevronRight />
          </div>
        </div>
        <div className="flex gap-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className=" justify-between w-full mx-auto flex gap-5 container flex-col  px-5 py-5 xl:py-[8px]  xl:px-[5px]">
        <div className="flex gap-3  w-full justify-between">
          <div className="flex gap-3 items-center">
            <Star />
            <h1 className="font-bold text-2xl">Салад ба зууш</h1>
          </div>
          <div className="flex items-center text-[#18BA51] font-normal text-sm">
            <p>Бүгдийг харах</p>
            <FaChevronRight />
          </div>
        </div>
        <div className="flex gap-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className=" justify-between w-full mx-auto flex gap-5 container flex-col  px-5 py-5 xl:py-[8px]  xl:px-[5px]">
        <div className="flex gap-3  w-full justify-between">
          <div className="flex gap-3 items-center">
            <Star />
            <h1 className="font-bold text-2xl">Амттан</h1>
          </div>
          <div className="flex items-center text-[#18BA51] font-normal text-sm">
            <p>Бүгдийг харах</p>
            <FaChevronRight />
          </div>
        </div>
        <div className="flex gap-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
