import { UserIcon } from "../../../public/Icons/UserIcon";
import { PhoneIcon } from "../../../public/Icons/PhoneIcon";
import { EmailIcon } from "../../../public/Icons/EmailIcon";
import { TimeIcon } from "../../../public/Icons/TimeIcon";
import { LogoutIcon } from "../../../public/Icons/LogoutIcon";
import { EditIcon } from "../../../public/Icons/EditIcon";

export default function UserProfile() {
  return (
    <>
      <div className="flex flex-col gap-5 border-2 rounded mt-5 mb-5 justify-center items-center mx-auto w-1/3 p-5">
        <img
          src="/images/profile-pic.jpg"
          alt="Profile Picture"
          className="user-profile__image"
        />
        <h1 className="text-2xl">УгтахБаяр</h1>
      </div>

      <div className="flex flex-col gap-5 border-2 rounded mt-5 mb-5 justify-center items-center mx-auto w-1/3 p-5">
          <div className="flex bg-slate-200 rounded p-2 w-full items-center">
            <div className="flex bg-slate-200 rounded p-2 w-full items-center gap-3">
              <UserIcon />
              <div>
                <p>Таны нэр</p>
                <p>УгтахБаяр</p>
              </div>
            </div>
            <div className="p-3">
              <EditIcon />
            </div>
          </div>

          <div className="flex bg-slate-200 rounded p-2 w-full items-center">
            <div className="flex bg-slate-200 rounded p-2 w-full items-center gap-3">
              <PhoneIcon />
              <div>
                <p>Утасны дугаар</p>
                <p>88883345</p>
              </div>
            </div>
            <div className="p-3">
              <EditIcon />
            </div>
          </div>

          <div className="flex bg-slate-200 rounded p-2 w-full items-center">
            <div className="flex bg-slate-200 rounded p-2 w-full items-center gap-3">
              <EmailIcon />
              <div>
                <p>Имэйл хаяг</p>
                <p>Ugtakhbayr@gmail.com</p>
              </div>
            </div>
            <div className="p-3">
              <EditIcon />
            </div>
            
          </div>
        <div className="flex  rounded p-2 w-full items-center gap-3">
          <TimeIcon />
          <p>Захиалгын түүх</p>
        </div>
        <div className="flex  rounded p-2 w-full items-center gap-3">
          <LogoutIcon />
          <p>Гарах</p>
        </div>
      </div>
    </>
  );
}
