import { useEffect, useState } from "react";
import { fetcher } from "@/app/util";

type Menu = [{
  foodName: string;
  foodCategory: string;
  foodIngredients: string;
  foodPrice: number;
  salesPercentage: number;
  foodImg: string;
}];

export function AdminCard() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = () => {
    fetch("http://localhost:8000/menu")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  };

  console.log(menus);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 sm:gap-x-[50px] xl:gap-[115px] mt-10 mb-5">
      {menus.map((menu) => (
        <div>
          <div className="grid grid-cols-3 w-[282px] h-[253px] hover:scale-105">
            <div className="bg-[url('/images/menuZurag.jpg')] grid items-center justify-items-center group-hover:opacity-60 h-[186px]  duration-300  rounded-2xl ease-in-out  bg-center w-[282px]">
              <button className="animate-bounce z-20 w-[166px] h-[40px] rounded-xl text-lg text-black mt-4 mr-4  font-semibold px-4 py-1 bg-white opacity-0 hover:opacity-90 transition-all">
                EDIT
              </button>
            </div>
          </div>
          <div className="gap-1">
            <p className="text-xl font-semibold text-black">{menu.foodName}</p>
            <p className="text-lg font-semibold text-[#18BA51] ">{menu.foodPrice}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const Test = () => {
  const [isHover, setIsHover] = useState(false);

  const scale = isHover ? "100" : "110";
  const handleHover = () => {
    setIsHover(!isHover);
  };
  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={`hover:scale:${scale}`}
    >
      <div className={`hover:scale:${scale}`}>title</div>
      <div className={`hover:scale:${scale}`}>title</div>
    </div>
  );
};
