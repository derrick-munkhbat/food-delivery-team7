"use client";

import { HideIcon } from "../../../../public/Icons/HideIcon";
import { useState } from "react";

export default function PassResetByCode() {
  const [code, setCode] = useState("");

  const getCode = (e) => {
    console.log({ code });
    e.preventDefault();
    window.location.href = "/reset-pass/otp/new-pass"
  };
  return (
    <div className="flex flex-col gap-5 border-2 rounded mt-5 mb-5 justify-center items-center mx-auto  w-[448px] h-[310px] p-5">
      <h1 className="text-2xl">Нууц үг сэргээх</h1>
      <div className="flex flex-col w-full max-w-xs gap-3">
        <div>
          <p className="text-sm text-yellow-600">
            Таны <span className="text-green-600">example@pinecone.mn</span>{" "}
            хаяг руу сэргээх код илгээх болно.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">Нууц үг сэргээх код</p>

          <div className="relative flex justify-center flex-col ">
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
            />
            <button
              type="button"
              data-hs-toggle-password='{
        "target": "#hs-toggle-password"
        }'
              className="absolute top-0 end-0 flex items-center p-3.5 rounded-e-md  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <HideIcon />
            </button>
          </div>
        </div>
      </div>
      <button
        className="btn btn-enabled w-full max-w-xs hover:bg-green-500 hover:text-white"
        aria-disabled="true"
        type="submit"
        onClick={getCode}
      >
        Үргэлжлүүлэх
      </button>
    </div>
  );
}
