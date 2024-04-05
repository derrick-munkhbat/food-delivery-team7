import { useEffect, useState } from "react";
import { fetcher } from "@/app/util";

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

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 justify-items-center gap-[60px] mt-10 mb-5">
      {menus.map((menu) => (
        <div className="grid gap-[14px]">
          <div className="w-[282px] hover:scale-105">
            <div className="bg-[url('/images/menuZurag.jpg')] grid items-center justify-items-center group-hover:opacity-60 h-[186px]  duration-300  rounded-2xl ease-in-out  bg-center w-[282px]">
              <button className="z-20 w-[166px] h-[40px] rounded-xl text-lg text-black font-semibold px-4 py-1 bg-white opacity-0 hover:opacity-90 transition-all">
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