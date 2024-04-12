"use client";
import React from "react";
import { DetailIcon } from "../../components/icons/DetailIcon";
import { FaArrowLeft, FaArrowRight, FaRegTrashAlt } from "react-icons/fa";

import { AdminDashboard } from "./OrderData";
import { Pagination } from "@mui/material";
import { MdModeEdit } from "react-icons/md";
export default function Dashboard() {
  const [currentIndex, _setCurrentIndex] = React.useState(0);

  return (
    <div className="bg-[#F7F7F8] py-10">
      <div className="container w-full min-w-[1024px] mx-auto">
        <div className="border-2 border-[#ECEDF0] rounded-xl bg-white">
          <div className="flex border-b-2 border-b-[#ECEDF0] justify-between px-5 py-6 items-center">
            <h1 className="text-2xl font-bold">Admin dashboard</h1>
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

          <div className="flex font-semibold text-[#3F4145] border-b-2 border-b-[#D6D8DB] bg-[#F7F7F8] items-center">
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

          {AdminDashboard.slice(currentIndex, currentIndex + 7).map(
            (adminDashboard, index) => (
              <>
                <div className="flex items-center border-b-2 border-b-[#ECEDF0]">
                  <div className="min-w-[229px] w-[344px] py-3 px-6 flex gap-2 text-sm">
                    <img
                      src={adminDashboard.foodImg}
                      className="size-10 object-fill rounded border-2"
                    />
                    <div>
                      <div className="font-semibold">
                        {adminDashboard.orderId}
                      </div>
                      <div>Category</div>
                    </div>
                  </div>
                  <div className="min-w-[140px] w-[210px] py-3 px-6">
                    <div className="font-semibold">
                      {adminDashboard.phoneNumber}
                    </div>
                    <div>{adminDashboard.userName}</div>
                  </div>
                  <div className="min-w-[229px] w-[344px] py-3 px-6 flex justify-between items-center">
                    <div>
                      <div className="font-semibold">
                        {adminDashboard.price}
                      </div>
                      <div>{adminDashboard.dateAndHour}</div>
                    </div>
                    <div className="h-6 rounded-full bg-[#C1E6CF] text-[#0A4E22] px-1.5">
                      {adminDashboard.status}
                    </div>
                  </div>
                  <div className="min-w-[229px] w-[344px] py-3 px-6">
                    {adminDashboard.address}
                  </div>
                  <div className="min-w-[128px] w-[191px] py-3 px-6">
                    <div className="h-6 rounded-full bg-[#C1E6CF] w-min text-[#0A4E22] px-1.5">
                      {adminDashboard.delivery}
                    </div>
                  </div>
                  <div className="min-w-[69px] w-[103px] py-3 px-6">
                    <div className="dropdown dropdown-right">
                      <div tabIndex={0} role="button" className="p-3 m-1">
                        <DetailIcon />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <div>
                            <MdModeEdit />
                            <p>Edit name</p>
                          </div>
                        </li>

                        <li>
                          <div className="text-[#DF1F29]">
                            <FaRegTrashAlt />
                            <a className="text-[#DF1F29]">Delete Category </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )
          )}
        </div>
        <div className="divider mt-10 "></div>
        <div className="flex justify-between">
          <button className="flex items-center gap-2 font-semibold bg-white border-2 p-2 rounded-lg">
            <FaArrowLeft />
            Previous
          </button>
          <div className="join">
            <button className="join-item btn">1</button>
            <button className="join-item btn">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn btn-disabled">.....</button>
            <button className="join-item btn">8</button>
            <button className="join-item btn">9</button>
            <button className="join-item btn">10</button>
          </div>
          <button className="flex items-center gap-2 font-semibold bg-white border-2 p-2 rounded-lg">
            <FaArrowRight />
            next
          </button>
        </div>
      </div>
    </div>
  );
}
