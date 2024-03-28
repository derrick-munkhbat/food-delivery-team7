"use client";

import { UserIcon } from "@/components/icons/UserIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { EmailIcon } from "@/components/icons/EmailIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { useState } from "react";

export default function UpDateUserProfile() {
  const [message, setMessage] = useState('');

  const handleSave = () => {
    // TODO: Save data to server

    setMessage('Мэдээлэл амжилттай хадгалагдлаа');
  };

  return (
    <>
      <div>
        

        <div className="flex flex-col gap-5 border-2 rounded mt-5 mb-5 items-center mx-auto w-[448px] h-[224px] p-5">
          <div className="relative">
            <img src="/images/user-photo.jpg" alt="profile picture" />

            <button className="absolute right-0 bottom-0 bg-white border-2 rounded-full p-1">
              <EditIcon />
            </button>
          </div>


          <h1 className="text-3xl font-bold">УгтахБаяр</h1>
        </div>

        <div className="flex flex-col gap-5 border-2 rounded mt-5 mb-5 justify-center items-center mx-auto w-[448px] p-5">
          <div className="flex bg-slate-200 rounded p-2 w-full items-center">
            <div className="flex bg-slate-200 rounded p-2 w-full items-center gap-3">
              <UserIcon />
              <div>
                <p className="text-slate-400">Таны нэр</p>
                <p>УгтахБаяр</p>
              </div>
            </div>
            <button className="p-3">
              <EditIcon />
            </button>
          </div>

          <div className="flex bg-slate-200 rounded p-2 w-full items-center">
            <div className="flex bg-slate-200 rounded p-2 w-full items-center gap-3">
              <PhoneIcon />
              <div>
                <p className="text-slate-400">Утасны дугаар</p>
                <p>88883345</p>
              </div>
            </div>
            <button className="p-3">
              <EditIcon />
            </button>
          </div>

          <div className="flex bg-slate-200 rounded p-2 w-full items-center">
            <div className="flex bg-slate-200 rounded p-2 w-full items-center gap-3">
              <EmailIcon />
              <div>
                <p className="text-slate-400">Имэйл хаяг</p>
                <p>Ugtakhbayr@gmail.com</p>
              </div>
            </div>
            <button className="p-3">
              <EditIcon />
            </button>
          </div>

          {/* user info uurchlugdvul todorno tegeed update the info*/}
          <button
            className="btn btn-enabled w-full  hover:bg-green-500 hover:text-white"
            role="button"
            aria-disabled="true"
            onClick={handleSave}
          >
            Хадгалах
          </button>{message && <div className="alert alert-success absolute bg-white flex gap-5 border-2 rounded-2xl mt-5 mb-5 justify-center items-center mx-auto w-[448px] p-5 top-10"><CheckIcon />
          <h1 className="text-green-800">{message}</h1>
          
          
          
          </div>}
        
          
        </div>
      </div>
    </>
  );
}
