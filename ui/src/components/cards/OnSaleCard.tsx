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
    <>
      {foodcards
        .slice(currentIndex, currentIndex + 4)
        .map((foodcard, index) => (
          <div className="flex w-[282px] h-[253px] gap-1  flex-col" key={index}>
            <div
              style={{
                backgroundImage: `url(${foodcard.image}`,
              }}
              className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  h-[186px] grid justify-items-end bg-center w-[340px] rounded-xl`}
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
    </>
  );
}
