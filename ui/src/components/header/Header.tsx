"use client";

import { useState, useEffect } from "react";
import { HeaderLogo } from "../../../public/Headerlogo";
import { Menu } from "../icons/Menuicon";
import { IoChevronBack } from "react-icons/io5";
import { Mainmenu } from "@/components/header/headerMenuMaps/MainMenu";
import { MobileHeaderMenu } from "./mobileHeader/MobileHeaderMenu";

// import { UserHeader } from "@/app/basket/page";
import { UserMenu } from "./headerMenuMaps/userMenu";

// import { Mainmenu } from "@/components/DATA/MainMenu";

export function Header() {
  

  return (
    <div className="top-0 z-30  h-[57px] justify-between  w-full mx-auto flex gap-6 container  px-5 py-5 xl:py-[8px]  xl:px-[5px] ">
      <div className=" font-bold flex gap-8 justify-center items-center">
        <a href="/">
          <HeaderLogo />
        </a>
        <div className="flex items-center justify-center flex-1 max-lg:hidden">
          <Mainmenu />
        </div>
      </div>
      <div className="flex items-center max-md:hidden">
        <UserMenu />
      </div>
      <MobileMenu />
    </div>
  );
}

function MobileMenu() {
  const [visible, setVisible] = useState(false);

  function closeMenu() {
    setVisible(false);
  }

  function openMenu() {
    setVisible(true);
  }

  return (
    <>
      <button onClick={openMenu} className="flex sm:hidden items-center ">
        <Menu />
      </button>
      {visible && <div className="fixed bg-slate-400/70 inset-0 "></div>}
      <div
        className={`fixed bg-white top-0 bottom-0 w-3/4 transition-all ${
          visible ? "right-0" : "-right-full"
        }`}
      >
        <div>
          <div className="flex p-3 gap-5 items-center justify-center">
            <button className="text-2xl" onClick={closeMenu}>
              <IoChevronBack />
            </button>
            <img
              src="https://assets-global.website-files.com/64d1a97b791d8ca9bb004633/65cca425b8c0d5d11e8e2992_Logo.svg"
              loading="lazy"
              alt="Pinecone Academy Logo"
            />
          </div>
          <div className="flex flex-col">
            <MobileHeaderMenu />
          </div>
        </div>
      </div>
    </>
  );
}
