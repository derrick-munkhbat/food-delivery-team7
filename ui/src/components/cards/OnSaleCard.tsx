// import React from "react";

// export function OnSaleCards() {
//   const [currentIndex, setCurrentIndex] = React.useState(0);

//   const price = 4800;
//   const sale = price + price * 0.2;

//   const foodcards = [
//     {
//       title: "Өглөөний хоол",
//       image: "/images/menuZurag.jpg",
//     },
//     {
//       title: "Зайрмаг",
//       image: "/images/zairmag.jpeg",
//     },
//     {
//       title: "Өглөөний хоол",
//       image: "/images/ugluuniihool.png",
//     },
//     {
//       title: "Breakfast",
//       image: "/images/zuush.jpg",
//     },
//   ];

//   return (
//     <div>
//       <div className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 justify-items-center justify-center sm:gap-x-[50px] xl:gap-[115px] mt-10 mb-5">
//         {foodcards
//           .slice(currentIndex, currentIndex + 4)
//           .map((foodcard, index) => (
//             <div
//               className="w-[282px] h-[253px] gap-1 flex flex-col"
//               key={index}
//             >
//               <div
//                 style={{
//                   backgroundImage: `url(${foodcard.image} `,
//                 }}
//                 className="shadow-md duration-500 hover:scale-105 hover:shadow-xl object-cover h-[186px] grid justify-items-end bg-center max-xl:w-72 w-[340px] rounded-xl"
//               >
//                 <p className="w-[69px] h-[35px] rounded-xl text-lg text-white mt-4 mr-4  font-semibold px-4 py-1 bg-[#18BA51]">
//                   20%
//                 </p>
//               </div>
//               <div className="gap-1 ">
//                 <p className="text-xl font-semibold text-black">
//                   {foodcard.title}
//                 </p>
//                 <div className="flex gap-4">
//                   <p className="text-lg font-semibold text-[#18BA51] ">
//                     {price}₮{" "}
//                   </p>
//                   <p className="line-through text-lg"> {sale}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useFood, useSaledFoods } from "@/app/globals";
import { NumericFormat } from "react-number-format";
import { OrderModal } from "@/app/menu/order";
import { getOnSaleFoods } from "@/app/util";

export function OnSaleCards({ size }: { size?: number }) {
  const [foodId, setFoodId] = useState("");
  const { saledFoods, setSaledFoods }: any = useSaledFoods();

  useEffect(() => {
    getOnSaleFoods(size).then((data) => {
      setSaledFoods(data);
      console.log(data);
    });
  }, []);

  console.log({ saledFoods });
  return (
    <div className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 justify-items-center justify-center sm:gap-x-[50px] xl:gap-[115px] mt-10 mb-5">
      {saledFoods.map((food: any) => (
        <div
          className="w-[282px] h-[253px] gap-1 flex flex-col"
          key={food._id}
          onClick={() => setFoodId(food._id)}
        >
          <div className="w-[282px]">
            <div className="bg-[url('/images/menuZurag.jpg')] shadow-md duration-500 hover:scale-105 hover:shadow-xl object-cover h-[186px] grid justify-items-end bg-center max-xl:w-72 w-[335px] rounded-xl  relative">
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
