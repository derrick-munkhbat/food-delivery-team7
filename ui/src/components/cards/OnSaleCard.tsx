import React from "react";

export function OnSaleCards() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const price = 4800;
  const sale = price + price * 0.2;

  const foodcards = [
    {
      title: "Өглөөний хоол",
      image: "/images/menuZurag.jpg",
    },
    {
      title: "Зайрмаг",
      image: "/images/zairmag.jpeg",
    },
    {
      title: "Өглөөний хоол",
      image: "/images/ugluuniihool.png",
    },
    {
      title: "Breakfast",
      image: "/images/zuush.jpg",
    },
  ];

  return (
    <div className=" flex sm:p-8 md:p-30">
      <div className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 justify-items-center justify-center md:gap-x-[50px] xl:gap-[115px] mt-10 mb-5">
        {foodcards
          .slice(currentIndex, currentIndex + 4)
          .map((foodcard, index) => (
            <div
              className=" w-[282px] h-[253px] gap-1 flex flex-col"
              key={index}
            >
              <div
                style={{
                  backgroundImage: `url(${foodcard.image}`,
                }}
                className={` shadow-md duration-500 hover:scale-105 hover:shadow-xl  h-[186px] grid justify-items-end bg-center max-xl:w-72 w-[340px] rounded-xl`}
              >
                <p className="w-[69px] h-[35px] rounded-xl text-lg text-white mt-4 mr-4  font-semibold px-4 py-1 bg-[#18BA51]">
                  20%
                </p>
              </div>
              <div className="gap-1 ">
                <p className="text-xl font-semibold text-black">
                  {foodcard.title}
                </p>
                <div className="flex gap-4">
                  <p className="text-lg font-semibold text-[#18BA51] ">
                    {price}₮{" "}
                  </p>
                  <p className="line-through text-lg"> {sale}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
