"use client";

import { UserIcon } from "@/components/icons/UserIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { EmailIcon } from "@/components/icons/EmailIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { useState } from "react";

export default function UpDateUserProfile() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = () => {
    setMessage("Мэдээлэл амжилттай хадгалагдлаа");
    // need await function to go back to user profile page after few secods
    // window.location.href = "/user-profile/update-user-profile";
  };

  const handleEditName = () => {
    const enteredName = prompt("Please enter your new name");
    setName(enteredName);
    console.log(name);
  };

  const handleEditPhoneNumber = () => {
    const enteredPhoneNumber = prompt("Please enter your new phone number");
    setPhoneNumber(enteredPhoneNumber);
    console.log(phoneNumber);
  };

  const handleEditEmail = () => {
    const enteredEmail = prompt("Please enter your new email");
    setEmail(enteredEmail);
    console.log(email);
  };

  return (
    <>
      <div>
        <div className="flex flex-col gap-5 mt-20 mb-5 items-center mx-auto w-[448px] h-[224px] p-5">
          <div className="relative">
            <img src="/images/user-photo.jpg" alt="profile picture" />

            <button className="absolute right-0 bottom-0 bg-white border-2 rounded-full p-1">
              <EditIcon />
            </button>
          </div>

          <h1 className="text-3xl font-bold">УгтахБаяр</h1>
        </div>

        <div className="flex flex-col gap-5 mt-5 mb-20 justify-center items-center mx-auto w-[448px] p-5">
          <div className="flex bg-slate-200 rounded p-2 w-full items-center">
            <div className="flex bg-slate-200 rounded p-2 w-full items-center gap-3">
              <UserIcon />
              <div>
                <p className="text-slate-400">Таны нэр</p>
                <p>УгтахБаяр</p>
              </div>
            </div>
            <button className="p-3" onClick={handleEditName}>
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
            <button className="p-3" onClick={handleEditPhoneNumber}>
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
            <button className="p-3" onClick={handleEditEmail}>
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
          </button>
          {message && (
            <div className="alert alert-success fixed bg-white flex gap-5 border-2 rounded-2xl mt-20 mb-5 justify-center items-center mx-auto w-[370px] p-5 top-10">
              <CheckIcon />
              <h1 className="text-green-800">{message}</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
