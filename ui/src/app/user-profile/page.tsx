import { UserIcon } from "@/components/icons/UserIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { EmailIcon } from "@/components/icons/EmailIcon";
import { TimeIcon } from "@/components/icons/TimeIcon";
import { LogoutIcon } from "@/components/icons/LogoutIcon";
import { EditIcon } from "@/components/icons/EditIcon";
import { CheckIcon } from "@/components/icons/CheckIcon";

export default function UserProfile() {
  return (
    <>
      {/* update hiihed garch irne */}
      <div className="relative">
        <div className="flex gap-5 border-2 rounded-2xl mt-5 mb-5 justify-center items-center mx-auto w-2/6 p-5">
          <CheckIcon />
          <h1 className="text-green-800">Мэдээлэл амжилттай хадгалагдлаа</h1>
        </div>

        <div className="flex flex-col gap-5 border-2 rounded mt-5 mb-5 justify-center items-center mx-auto w-1/3 p-5">
          <div className="relative">
            <img src="/images/user-photo.jpg" alt="profile picture" />

            <button className="absolute right-0 bottom-0 bg-white border-2 rounded-full p-1">
              <EditIcon />
            </button>
          </div>

          <h1 className="text-2xl">УгтахБаяр</h1>
        </div>

        <div className="flex flex-col gap-5 border-2 rounded mt-5 mb-5 justify-center items-center mx-auto w-1/3 p-5">
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
            className="btn btn-enabled w-full max-w-xs hover:bg-green-500"
            role="button"
            aria-disabled="true"
          >
            Хадгалах
          </button>
          <button className="flex rounded p-2 w-full items-center gap-3">
            <TimeIcon />
            <p>Захиалгын түүх</p>
          </button>

          <button className="flex  rounded p-2 w-full items-center gap-3">
            <LogoutIcon />
            <p>Гарах</p>
          </button>
        </div>

        {/* must be hidden; comes out when signout button clicked */}
        <div className="relativce bg-black opacity-30 h-[3000px]">
          <div className="flex flex-col border-2 rounded-2xl justify-center items-center mx-auto w-2/6 h-60">
            <h1 className="text-3xl text-center p-5 font-medium">
              Та системээс гарахдаа итгэлтэй байна уу?
            </h1>
            <div className="flex bg-green-200 justify-around w-full h-full text-2xl rounded-b-xl">
              <button className="hover:bg-green-500 font-bold w-1/2 rounded-b-xl">
                Тийм{" "}
              </button>
              <button className="hover:bg-green-500 font-bold w-1/2 rounded-b-xl">
                Үгүй
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
