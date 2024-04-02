"use client";

import { useState, useEffect } from "react";
import { HeaderLogo } from "../../../public/Headerlogo";
import { NevtrehIcon } from "../../../public/Nevtrehicon";
import { SagsIcon } from "../../../public/SagsIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { Menu } from "../icons/Menuicon";
import { IoChevronBack } from "react-icons/io5";
import { Mainmenu } from "@/components/header/MainMenu";
import { MobileHeaderMenu } from "./mobileHeader/MobileHeaderMenu";
import CartCard from "./cart-modal/CartCard";
import { ArrowIcon } from "@/components/icons/ArrowIcon";

// import { Mainmenu } from "@/components/DATA/MainMenu";

export function Header() {
  const [visible, setVisible] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  function openCart() {
    // open=true;
    setVisible(true);
    setDrawerOpen(true);
  }

  function closeCart() {
    // open=false;
    setVisible(false);
    setDrawerOpen(false);
  }

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [drawerOpen]);

  return (
    <div className="top-0 z-10  h-[57px] justify-between  w-full mx-auto flex gap-5 container  px-5 py-5 xl:py-[8px]  xl:px-[5px] ">
      <div className=" font-bold flex gap-8 justify-center items-center">
        <a href="/">
          <HeaderLogo />
        </a>
        <div className="flex items-center justify-center flex-1 max-lg:hidden">
          <Mainmenu />
        </div>
      </div>
      <div className=" flex gap-5">
        <div className="flex gap-3 font-bold  justify-center flex-1 max-sm:hidden  items-center  ">
          <label className="input h-[35px] input-bordered flex items-center gap-2">
            <SearchIcon />
            <input type="text" className="grow" placeholder="Хайх" />
          </label>
        </div>
        <button
          onClick={openCart}
          className="flex gap-3 font-bold flex-1 max-sm:hidden  items-center "
        >
          <SagsIcon />
          <p>Сагс</p>
        </button>
        {visible && <div className="z-10 fixed bg-slate-400/70 inset-0"></div>}
        <div
          className={`z-10 fixed top-0 bottom-0 w-[586px] transition-all bg-white flex pl-5 pr-5 max-sm:hidden ${
            visible ? "right-0" : "-right-full"
          }`}
        >
          <div className="flex flex-col justify-between">
            {/* CART HEADERT */}
            <div className="flex w-full h-18 items-center border-b-2 mb-3">
              <button className="flex p-3" onClick={closeCart}>
                <ArrowIcon />
              </button>
              <p className="flex w-full items-center justify-center text-2xl p-3">
                Таны сагс
              </p>
            </div>

            <div className="flex flex-col gap-3 h-[800px] overflow-scroll ">
              <CartCard />
              <CartCard />
              <CartCard />
              <CartCard />
              <CartCard />
              <CartCard />
            </div>

            {/* CART FOOTER */}
            <div className="flex items-center w-full h-[172px] border-t-2 mt-3">
              <div className="flex flex-col w-1/2 items-center">
                <p className="font-normal text-slate-600">Нийт төлөх дүн</p>
                <p>34,800₮</p>
              </div>
              <div className="btn btn-enabled w-1/2 max-w-xs hover:bg-green-500">
                <button>Захиалах</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 font-bold  justify-center flex-1 max-sm:hidden  items-center ">
          <NevtrehIcon />
          <a href="/sign-in">Нэвтрэх</a>
        </div>
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
