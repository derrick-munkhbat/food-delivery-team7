"use client";
import { mainMenuitems } from "../mainMenuItems";
import { usePathname } from "next/navigation";

export function Mainmenu() {
  const pathname = usePathname();
  
  
  return (
    <>
      <div className="flex p-2 md:flex items-center justify-center flex-1 gap-10  ">
        {mainMenuitems.map((item) => (
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
    </>
  );
}
