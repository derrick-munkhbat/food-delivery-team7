"use client";

// mailjet secret key: baa02e0cae28f75aeb702d97f5a66697

import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { Loading } from "@/components/Loading";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function Home() {
  const [show1, setShow1] = useState("");
  const [show2, setShow2] = useState("");
  const [hider1, setHider1] = useState(() => eyeOff);
  const [hider2, setHider2] = useState(() => eyeOff);
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const handleSave = async () => {
    // if (password.trim() === "" || confirmPassword.trim() === "") {
    //   return alert("Нууц үг хоосон байна!");
    // }

    // if (password !== confirmPassword) {
    //   return alert("Нууц үгээ дахин шалгана уу!");
    //   // setMessage("Нууц үг ижил биш байна!");
    // }

    // if (confirmPassword.trim() === "") {
    //   return alert("Нууц үгээ дахин шалгана уу!");
    // }

    // if (password !== confirmPassword) {
    //   return alert("Нууц үгээ дахин шалгана уу!");
    // }

    setIsLoading(true);

    try {
      await axios.put("http://localhost:8000/token/resetPassword", {
        token,
        email,
        password,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 mt-40 mb-20 justify-center items-center mx-auto w-[448px] h-[310px] p-5">
      <h1 className="text-2xl">Шинэ нууц үг зохиох </h1>
      <div className="flex flex-col w-full max-w-xs gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-sm">Нууц үг</p>

          <div className="relative flex justify-center flex-col ">
            <input
              name="passowrd"
              id="password"
              placeholder="Нууц үг"
              type={show1}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <button
              type="button"
              //   onClick={handleToggler1}
              data-hs-toggle-password='{
        "target": "#hs-toggle-password"
        }'
              className="absolute top-0 end-0 flex items-center p-3 rounded-e-md  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <Icon icon={hider1} size={25} />
            </button>
          </div>

          <div className="relative flex justify-center flex-col ">
            <input
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Нууц үг давтах"
              type={show2}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <button
              type="button"
              //   onClick={handleToggler2}
              data-hs-toggle-password='{
        "target": "#hs-toggle-password"
        }'
              className="absolute top-0 end-0 flex items-center p-3 rounded-e-md  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <Icon icon={hider2} size={25} />
            </button>
          </div>
        </div>
        <button
          className="btn btn-enabled w-full max-w-xs hover:bg-green-500 hover:text-white"
          role="button"
          aria-disabled="true"
          onClick={handleSave}
        >
          Үргэлжлүүлэх
        </button>

        {isLoading ? (
          <div className="mt-5">
            <Loading />
          </div>
        ) : (
          message && (
            <div className="alert alert-success fixed bg-white flex gap-5 border-2 rounded-2xl justify-center items-center mx-auto w-[328px] p-5 mt-12 top-10">
              <CheckIcon />
              <h1 className="text-green-800">{message}</h1>
            </div>
          )
        )}
      </div>
    </div>
  );
}
