"use client";

import { useState, useEffect } from "react";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import CartCard from "@/components/header/cart-drawer/CartCard";
import { BasketIcon } from "../../../public/SagsIcon";

// import { Mainmenu } from "@/components/DATA/MainMenu";

export default function Basket() {
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
    <div className=" flex gap-5">
      <button
        onClick={openCart}
        className="flex gap-3 font-bold flex-1 max-sm:hidden  items-center "
      >
        <BasketIcon />
        <p>Сагс</p>
      </button>
      {visible && <div className="z-10 fixed bg-slate-400/70 inset-0"></div>}
      <div
        className={`z-10 fixed top-0 bottom-0 w-[586px] transition-all bg-white flex pl-5 pr-5 max-sm:hidden ${
          visible ? "right-0" : "-right-full"
        }`}
      >
        <div className="flex flex-col justify-between">
          {/* CART HEADER */}
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

      {/* <div className=" flex gap-3 font-bold  justify-center flex-1 max-sm:hidden  items-center ">
        <NevtrehIcon />
        <a href="/sign-in">Нэвтрэх</a>
      </div> */}

      {/* <div className="flex gap-3 font-bold  justify-center flex-1 max-sm:hidden  items-center ">
        <div className="text-green-600">
          <NevtrehIcon />
        </div>
        <a href="/user-profile" className="text-green-600">
          Хэрэглэгч
        </a>
      </div> */}
    </div>
  );
}
