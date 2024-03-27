"use client";
import React from "react";
import { DetailIcon } from "../../components/icons/DetailIcon";
import { BigAddIcon } from "@/components/icons/BigAddIcon";

export default function Dashboard() {
  return (
    <div className="bg-[#F7F7F8] py-10">
      <div className="container w-full min-w-[1024px] mx-auto">
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

          <div className="flex border-b-2 border-b-[#D6D8DB] bg-[#F7F7F8] items-center">
            <div className="min-w-[229px] w-[344px] py-3 px-6 text-xs">
              Order Name
            </div>
            <div className="min-w-[140px] w-[210px] py-3 px-6 text-xs">
              Buyer info
            </div>
            <div className="min-w-[229px] w-[344px] py-3 px-6 text-xs">
              Payment
            </div>
            <div className="min-w-[229px] w-[344px] py-3 px-6 text-xs">
              Address
            </div>
            <div className="min-w-[128px] w-[191px] py-3 px-6 text-xs">
              Delivery state
            </div>
            <div className="min-w-[69px] w-[103px] py-3 px-6 text-xs"></div>
          </div>

          <div className="flex items-center">
            <div className="min-w-[229px] w-[344px] py-3 px-6 flex gap-2 text-sm">
              <div className="size-10 rounded border-2">IMG</div>
              <div>
                <div className="font-semibold">Order Id</div>
                <div>Category</div>
              </div>
            </div>
            <div className="min-w-[140px] w-[210px] py-3 px-6">
              <div className="font-semibold">Phone Number</div>
              <div>User Name</div>
            </div>
            <div className="min-w-[229px] w-[344px] py-3 px-6 flex justify-between items-center">
              <div>
                <div className="font-semibold">Price</div>
                <div>Date and hour</div>
              </div>
              <div className="h-6 rounded-full bg-[#C1E6CF] text-[#0A4E22] px-1.5">Paid</div>
            </div>
            <div className="min-w-[229px] w-[344px] py-3 px-6">Address</div>
            <div className="min-w-[128px] w-[191px] py-3 px-6">
            <div className="h-6 rounded-full bg-[#C1E6CF] text-[#0A4E22] px-1.5">Delivered</div>
            </div>
            <div className="min-w-[69px] w-[103px] py-3 px-6">
              <DetailIcon />
            </div>
          </div>

          <div className="flex ">
            <div className="min-w-[229px] w-[344px] py-3 px-6 flex gap-2 text-sm">
              <div className="size-10 rounded border-2">IMG</div>
              <div>
                <div className="font-semibold">Order Id</div>
                <div>Category</div>
              </div>
            </div>
            <div className="min-w-[140px] w-[210px] py-3 px-6">
              <div className="font-semibold">Phone Number</div>
              <div>User Name</div>
            </div>
            <div className="min-w-[229px] w-[344px] py-3 px-6 flex justify-between items-center">
              <div>
                <div className="font-semibold">Price</div>
                <div>Date and hour</div>
              </div>
              <div className="h-6 rounded-full bg-[#FCBABE] text-[#670E13] px-1.5">Not Paid</div>
            </div>
            <div className="min-w-[229px] w-[344px] py-3 px-6">Address</div>
            <div className="min-w-[128px] w-[191px] py-3 px-6">
            <div className="h-6 rounded-full bg-[#FDF4B6] text-[#695C08] px-1.5">Progress</div>
            </div>
            <div className="min-w-[69px] w-[103px] py-3 px-6">
              <DetailIcon />
            </div>
          </div>

          <div className="flex">
            <div className="min-w-[229px] w-[344px] py-3 px-6 flex gap-2 text-sm">
              <div className="size-10 rounded border-2">IMG</div>
              <div>
                <div className="font-semibold">Order Id</div>
                <div>Category</div>
              </div>
            </div>
            <div className="min-w-[140px] w-[210px] py-3 px-6">
              <div className="font-semibold">Phone Number</div>
              <div>User Name</div>
            </div>
            <div className="min-w-[229px] w-[344px] py-3 px-6 flex justify-between items-center">
              <div>
                <div className="font-semibold">Price</div>
                <div>Date and hour</div>
              </div>
              <div className="h-6 rounded-full bg-[#C1E6CF] text-[#0A4E22] px-1.5">Paid</div>
            </div>
            <div className="min-w-[229px] w-[344px] py-3 px-6">Address</div>
            <div className="min-w-[128px] w-[191px] py-3 px-6">
            <div className="h-6 rounded-full bg-[#ECEDF0] text-[#1F2126] px-1.5">Waiting</div>
            </div>
            <div className="min-w-[69px] w-[103px] py-3 px-6">
              <DetailIcon />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
