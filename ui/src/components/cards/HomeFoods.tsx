import { useState } from "react";
import { NumericFormat } from "react-number-format";
import { OrderModal } from "@/app/menu/order";

export function HomeFoods({ foods }: { foods: any[] }) {
  const [foodId, setFoodId] = useState("");

  return (
    <div className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 justify-items-center justify-center sm:gap-x-[50px] xl:gap-[115px] mt-10 mb-5">
      {foods.map((food: any) => (
        <div
          className="w-[282px] h-[253px] gap-1 flex flex-col"
          key={food._id}
          onClick={() => setFoodId(food._id)}
        >
          <div className="w-[282px]">
            <div className="bg-[url('/images/menuZurag.jpg')] shadow-md duration-500 hover:scale-105 hover:shadow-xl object-cover h-[186px] grid justify-items-end bg-center max-xl:w-72 w-[335px] rounded-xl  relative">
              <img
                className="absolute h-[186px] rounded-2xl w-[335px] object-cover overflow-hidden"
                src={food.image}
              />
              {food.sales > 0 && (
                <div className="border-2 border-white text-white bg-[#18BA51] rounded-2xl py-1 px-4 absolute top-4 right-4 font-semibold text-lg">
                  {food.sales}%
                </div>
              )}
            </div>
          </div>

          <div className="gap-1">
            <p className="text-xl font-semibold text-black">{food.name}</p>
            <p className="text-lg font-semibold text-[#18BA51] ">
              {food.sales > 0 && (
                <div className="flex">
                  <NumericFormat
                    value={food.price - (food.sales / 100) * food.price}
                    allowLeadingZeros
                    thousandSeparator=","
                    suffix="₮"
                    className="bg-transparent text-lg font-semibold w-20"
                    disabled
                  />
                  <NumericFormat
                    value={food.price}
                    allowLeadingZeros
                    thousandSeparator=","
                    suffix="₮"
                    className="bg-transparent text-sm text-black line-through w-20"
                    disabled
                  />
                </div>
              )}
              {food.sales === 0 && (
                <NumericFormat
                  value={food.price}
                  allowLeadingZeros
                  thousandSeparator=","
                  suffix="₮"
                  className="bg-transparent text-lg font-semibold w-20"
                  disabled
                />
              )}
            </p>
          </div>
        </div>
      ))}
      <OrderModal foodId={foodId} onClose={() => setFoodId("")} />
    </div>
  );
}
