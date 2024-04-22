"use client";

import { UserIcon } from "@/components/icons/UserIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { EmailIcon } from "@/components/icons/EmailIcon";
import { TimeIcon } from "@/components/icons/TimeIcon";
import { LogoutIcon } from "@/components/icons/LogoutIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";

type User = {
  _id: string;
  Name: string;
  Email: string;
  Phone: string;
};

export default function UserProfile() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);
  const router = useRouter();

  async function fetcher(path: string) {
    try {
      const token = localStorage.getItem("accessToken");

      if (token) {
        const response = await axios.get(`http://localhost:8000/${path}`, {
          headers: {
            accessToken: token,
          },
        });

        console.log("User data fetched:", response.data);
        setUserData(response.data);
      } else {
        console.log("No access token found.");
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  }

  const path = "user";

  useEffect(() => {
    fetcher(path);
  }, []);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  const pushToUpdateUserData = () => {
    router.push("/user-profile/update-user-profile");
  };

  if (!userData) {
    return (
      <div className="flex h-screen w-full justify-center items-center">
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <div>
        <div className="flex flex-col gap-5 mt-20 mb-5 justify-center items-center mx-auto w-[448px] h-[224px] p-5">
          <div className="relative">
            <img src="/images/user-photo.jpg" alt="profile picture" />

            <button
              className="absolute right-0 bottom-0 bg-white border-2 rounded-full p-1"
              onClick={pushToUpdateUserData}
            >
              <EditIcon />
            </button>
          </div>

          <h1 className="text-3xl font-bold">{userData.Name}</h1>
        </div>

        <div className="flex flex-col gap-5 mt-5 mb-20 justify-center items-center mx-auto w-[448px] p-5">
          <div className="flex bg-slate-100 rounded p-2 w-full items-center">
            <div className="flex  rounded p-2 w-full items-center gap-3">
              <UserIcon />
              <div>
                <p className="text-slate-400">{userData.Name}</p>
              </div>
            </div>
            <button className="p-3" onClick={pushToUpdateUserData}>
              <EditIcon />
            </button>
          </div>

          <div className="flex bg-slate-100 rounded p-2 w-full items-center">
            <div className="flex rounded p-2 w-full items-center gap-3">
              <PhoneIcon />
              <div>
                <p className="text-slate-400">Утасны дугаар</p>
              </div>
            </div>
            <button className="p-3" onClick={pushToUpdateUserData}>
              <EditIcon />
            </button>
          </div>

          <div className="flex bg-slate-100 rounded p-2 w-full items-center">
            <div className="flex rounded p-2 w-full items-center gap-3">
              <EmailIcon />
              <div>
                <p className="text-slate-400">{userData.Email}</p>
                {/* <p onChange={(e) => setUserEmail}>{userEmail}</p> */}
              </div>
            </div>
            <button className="p-3" onClick={pushToUpdateUserData}>
              <EditIcon />
            </button>
          </div>

          <button className="flex rounded p-2 w-full items-center gap-3">
            <TimeIcon />
            <p>Захиалгын түүх</p>
          </button>

          <button
            onClick={toggleModal}
            className="flex rounded p-2 w-full items-center gap-3"
          >
            <LogoutIcon />

            {/* MODAL */}
            {isShowModal && (
              <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                <div className="flex flex-col bg-white border-2 rounded-2xl justify-center items-center mx-auto w-[384px] h-[228px]">
                  <h1 className="text-3xl text-center p-5 font-medium">
                    Та системээс гарахдаа итгэлтэй байна уу?
                  </h1>
                  <div className="flex bg-green-200 justify-around w-full h-full text-2xl rounded-b-xl">
                    <button className="hover:bg-green-500 font-bold w-1/2 rounded-b-xl">
                      Тийм
                    </button>
                    <button
                      onClick={() => setIsShowModal(false)}
                      className="hover:bg-green-500 font-bold w-1/2 rounded-b-xl"
                    >
                      Үгүй
                    </button>
                  </div>
                </div>
              </div>
            )}

            <p>Гарах</p>
          </button>
        </div>
      </div>
    </>
  );
}
