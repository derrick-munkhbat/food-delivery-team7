"use client";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { userMenuItems } from "../mainMenuItems";
import { usePathname } from "next/navigation";

import Basket from "@/app/basket/page";

export function UserMenu() {
  const pathname = usePathname();

  return (
    <div className="flex gap-5">
      <div className="flex gap-3 font-bold  justify-center flex-1 max-sm:hidden  items-center  ">
        <label className="input h-[35px] input-bordered flex items-center gap-2">
          <SearchIcon />
          <input type="text" className="grow" placeholder="Хайх" />
        </label>
        <Basket />
      </div>

      <div className="flex  p-2 md:flex items-center justify-center flex-1 gap-10 font-bold text-base ">
        {userMenuItems.map((item) => (
          <a
            key={item.id}
            className={`px-2 py4 border-l-violet-200 ${
              pathname === item.link ? "text-[#18BA51]" : ""
            }`}
            href={item.link}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
