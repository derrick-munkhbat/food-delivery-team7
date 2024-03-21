import { UserIcon } from "../../../public/Icons/UserIcon";
import { PhoneIcon } from "../../../public/Icons/PhoneIcon";
import { EmailIcon } from "../../../public/Icons/EmailIcon";
import { TimeIcon } from "../../../public/Icons/TimeIcon";
import { LogoutIcon } from "../../../public/Icons/LogoutIcon";
import { EditIcon } from "../../../public/Icons/EditIcon";

export default function UserProfile() {
  return (
    <>
      <div className="flex flex-col gap-5 border-2 rounded mt-5 mb-5 justify-center items-center mx-auto w-2/6 p-5">
        <img
          src="/images/profile-pic.jpg"
          alt="Profile Picture"
          className="user-profile__image"
        />
        <h1 className="text-2xl">УгтахБаяр</h1>
      </div>

      <div className="flex flex-col gap-5 border-2 rounded mt-5 mb-5 justify-center items-center mx-auto w-2/6 p-5">
        <div className="flex">
          <UserIcon />
          <div>
            <p>Таны нэр</p>
            <p>УгтахБаяр</p>
          </div>
          <EditIcon />
        </div>
        <div className="flex">
          <PhoneIcon />
          <div>
            <p>Утасны дугаар</p>
            <p>88883345</p>
          </div>
          <EditIcon />
        </div>
        <div className="flex">
          <EmailIcon />
          <div>
            <p>Имэйл хаяг</p>
            <p>Ugtakhbayr@gmail.com</p>
          </div>
          <EditIcon />
        </div>
        <div className="flex">
          <TimeIcon />
          <div>
            <p>Захиалгын түүх</p>
          </div>
        </div>
        <div className="flex">
          <LogoutIcon />
          <div>
            <p>Гарах</p>
          </div>
        </div>
      </div>
    </>
  );
}
