"use client";
import React from "react";
import { DetailIcon } from "../../components/icons/DetailIcon";
import { BigAddIcon } from "@/components/icons/BigAddIcon";

export default function Dashboard() {
  return (
    <div className="bg-[#F7F7F8] py-10">
      <div className="container w-full mx-auto">
        <div className="border-2 border-[#ECEDF0] rounded-xl bg-white">

          <div className="flex border-b-2 border-b-[#ECEDF0] justify-between px-5 py-6 items-center">
            <h1 className="text-xl fotn-bold">Admin dashboard</h1>
            <label className="input input-bordered flex items-center gap-2 w-[356px]">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          <div className="flex border-b-2 border-b-[#D6D8DB] w-full bg-[#F7F7F8] items-center">
            <div className="w-3/12 py-3 px-6 text-xs">Order Name</div>
            <div className="w-1/12 py-3 px-6 text-xs">Buyer info</div>
            <div className="w-3/12 py-3 px-6 text-xs">Payment</div>
            <div className="w-3/12 py-3 px-6 text-xs">Address</div>
            <div className="w-1/12 py-3 px-6 text-xs">Delivery state</div>
            <div className="w-1/12 py-3 px-6 text-xs"></div>
          </div>

           <div>
            Here comes the order data
           </div>

        </div>
      </div>



    </div>
  );
}
