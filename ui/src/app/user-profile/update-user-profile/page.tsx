"use client";

import { UserIcon } from "@/components/icons/UserIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { EmailIcon } from "@/components/icons/EmailIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { useState, useEffect, ChangeEventHandler } from "react";
import { Loading } from "@/components/Loading";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";

type User = {
  _id: string;
  Name: string;
  Email: string;
  Number: string;
};

export default function UpDateUserProfile() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [profilePic, setProfilePic] = useState(null);

  const [name, setName] = useState("");
  const [nameEditing, setNameEditing] = useState(false);
  const [tempName, setTempName] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberEditing, setPhoneNumberEditing] = useState(false);
  const [tempPhoneNumber, setTempPhoneNumber] = useState("");
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [emailEditing, setEmailEditing] = useState(false);
  const [tempEmail, setTempEmail] = useState("");

  const [userData, setUserData] = useState<User | null>(null);

  const handleChangeProfilePic = (event: any) => {
    setProfilePic(event.target.files[0]);
  };

  const handleUploadProfilePic = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = handleChangeProfilePic;
    input.click();
  };



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

  const handleEditName = () => {
    setNameEditing(true);
    setTempName(name);
  };

  const handleSaveName = () => {
    setNameEditing(false);
    setName(tempName);
  };

  const handleEditPhoneNumber = () => {
    setPhoneNumberEditing(true);
    setTempPhoneNumber(phoneNumber);
  };

  const handleSavePhoneNumber = () => {
    setPhoneNumberEditing(false);
    setPhoneNumber(tempPhoneNumber);
  };

  const handleEditEmail = () => {
    setEmailEditing(true);
    setTempEmail(email);
  };

  const handleSaveEmail = () => {
    setEmailEditing(false);
    setEmail(tempEmail);
  };

  const handleSave = () => {
    setIsLoading(true);

    if (!userData) {
      console.error("userData is null, cannot save user data.");
      return;
    }

    axios
      .put(`http://localhost:8000/user/${userData._id}`, userData)
      .then((response) => {
        if (response.status === 200) {
          console.log("User data saved successfully!");
        } else {
          console.error("Error saving user data:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Network error:", error);
      });
      
    setTimeout(() => {
      setIsLoading(false);
      setMessage("Таны мэдээлэл амжилттай солигдлоо!");
    }, 4000);

    setTimeout(() => {
      backToProfile();
    }, 7000);
  };

  if (!userData) {
    return (
      <div className="flex h-screen w-full justify-center items-center">
        <CircularProgress />
      </div>
    );
  }

  const userNameOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUserData({
      ...userData,
      Name: event.target.value,
    });
  };

  const userEmailOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUserData({
      ...userData,
      Email: event.target.value,
    });
  };

  const userPhoneOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUserData({
      ...userData,
      Number: event.target.value,
    });
  };

  const backToProfile = () => {
    router.push("/user-profile");
  };

  return (
    <>
      <div>
        <div className="flex flex-col gap-5 mt-20 mb-5 items-center mx-auto w-[448px] h-[224px] p-5">
          <div className="relative flex justify-center items-center">
            <img
              className="w-[120px] h-[120px] rounded-full border-2 flex justify-center items-center"
              src={
                profilePic
                  ? URL.createObjectURL(profilePic)
                  : "path_to_default_image"
              }
              alt="profile image"
            />

            <button
              onClick={handleUploadProfilePic}
              className="absolute right-0 bottom-0 bg-white border-2 rounded-full p-1"
            >
              <EditIcon />
            </button>
          </div>

          <h1 className="text-3xl font-bold">{userData.Name}</h1>
        </div>

        <div className="flex flex-col gap-5 mt-5 mb-20 justify-center items-center mx-auto w-[448px] p-5">
          <div className="flex bg-slate-100 rounded p-2 w-full items-center">
            <div className="flex rounded p-2 w-full items-center gap-3">
              <UserIcon />
              <div className="w-full">
                {nameEditing ? (
                  <input
                    placeholder="Нэр..."
                    type="text"
                    value={userData.Name}
                    onChange={userNameOnChange}
                    className="bg-slate-200 rounded p-2 w-full items-center"
                  />
                ) : (
                  <>
                    <p className="text-slate-400">Нэр</p>
                    <p>{userData.Name}</p>
                  </>
                )}
              </div>
            </div>
            <button
              className="p-3"
              onClick={nameEditing ? handleSaveName : handleEditName}
            >
              {nameEditing ? <CheckIcon /> : <EditIcon />}
            </button>
          </div>

          <div className="flex bg-slate-100 rounded p-2 w-full items-center">
            <div className="flex rounded p-2 w-full items-center gap-3">
              <PhoneIcon />
              <div className="w-full">
                {phoneNumberEditing ? (
                  <input
                    placeholder="Утасны дугаар..."
                    type="text"
                    value={userData.Number}
                    onChange={userPhoneOnChange}
                    className="bg-slate-200 rounded p-2 w-full items-center"
                  />
                ) : (
                  <>
                    <p className="text-slate-400">Утасны дугаар</p>
                    <p>{phoneNumber}</p>
                  </>
                )}
              </div>
            </div>
            <button
              className="p-3"
              onClick={
                phoneNumberEditing
                  ? handleSavePhoneNumber
                  : handleEditPhoneNumber
              }
            >
              {phoneNumberEditing ? <CheckIcon /> : <EditIcon />}
            </button>
          </div>

          <div className="flex bg-slate-100 rounded p-2 w-full items-center">
            <div className="flex  rounded p-2 w-full items-center gap-3">
              <EmailIcon />
              <div className="w-full">
                {emailEditing ? (
                  <input
                    placeholder="Имэйл хаяг..."
                    type="text"
                    value={userData.Email}
                    onChange={userEmailOnChange}
                    className="bg-slate-200 rounded p-2 w-full items-center"
                  />
                ) : (
                  <>
                    <p className="text-slate-400">Имэйл хаяг</p>
                    <p>{userData.Email}</p>
                  </>
                )}
              </div>
            </div>
            <button
              className="p-3"
              onClick={emailEditing ? handleSaveEmail : handleEditEmail}
            >
              {emailEditing ? <CheckIcon /> : <EditIcon />}
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
          {isLoading ? (
            <div className="mt-5">
              <Loading />
            </div>
          ) : (
            message && (
              <div className="alert alert-success fixed bg-white flex gap-5 border-2 rounded-2xl justify-center items-center mx-auto w-auto p-5 mt-20 top-10">
                <CheckIcon />
                <h1 className="text-green-800">{message}</h1>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
