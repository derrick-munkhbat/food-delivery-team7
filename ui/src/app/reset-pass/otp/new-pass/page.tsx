'use client'
import { CheckIcon } from "@/components/icons/CheckIcon";
import { HideIcon } from "../../../../../public/Icons/HideIcon";
import { useState } from "react";

export default function PassResetByNewPass() {
  
  const [message, setMessage] = useState('');

  const handleSave = () => {
    // TODO: Save data to server

    setMessage('Нууц үг амжилттай солигдлоо');
  };

  const getNewPass = () => {
    window.location.href = "/sign-in"
  }

  return (
    <>
      {/* <div className="flex gap-5 border-2 rounded-2xl mt-5 mb-5 justify-center items-center mx-auto w-[448px] p-5">
        <CheckIcon />
        <h1 className="text-green-600">Нууц үг амжилттай солигдлоо</h1>
      </div> */}

      <div className="flex flex-col gap-5 border-2 rounded mt-28 mb-5 justify-center items-center mx-auto w-[448px] h-[310px] p-5">
        <h1 className="text-2xl">Шинэ нууц үг зохиох </h1>
        <div className="flex flex-col w-full max-w-xs gap-3">
          <div className="flex flex-col gap-2">
            <p className="text-sm">Нууц үг</p>

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
          <button
            className="btn btn-enabled w-full max-w-xs hover:bg-green-500 hover:text-white"
            role="button"
            aria-disabled="true"
            onClick={handleSave}
            // onClick={getNewPass}
          >
            Үргэлжлүүлэх
          </button>{message &&
              <div className="alert alert-success fixed bg-white flex gap-5 border-2 rounded-2xl mt-10 justify-center items-center mx-auto w-[448px] p-5 top-10">
                <CheckIcon />
                <h1 className="text-green-800">{message}</h1>
              </div>
          }
          
        </div>
      </div>
    </>
  );
}
