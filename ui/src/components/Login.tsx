import Link from "next/link";
import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { mutator } from "@/app/util";
import { Toaster, toast } from 'sonner'

export function Login() {
  const [show, setShow] = useState("");
  const [type, setType] = useState("password");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [icon, setIcon] = useState(() => eyeOff);
  const [checked, setChecked] = useState(()=>false);
  const [Role, setRole] = useState("user");

  
  const handleChange = (event:any) => {
    const checkedRole = event.target.checked
    setChecked(checkedRole);
    setRole(event.target.value);
    if(checkedRole === true){
      setRole("admin")
    }else{
      setRole("user");
    }
    console.log(checked)
    console.log(Role)
  };

  async function login() {
    console.log(checked)
    console.log(Role)
    const data = await mutator("login", { Email , Password , Role });
    toast.success('Event has been created')
    const { accessToken } = data;

    window.location.href = "/";

    localStorage.setItem("accessToken", accessToken );
    if(Role === "admin") {
    localStorage.setItem("data", "admin");
  }
}

  function handleToggle() {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  }
  return (
    <div className="flex items-center w-11/12  md:w-[500px] min-h-screen   lg:justify-center  mx-auto">
       <Toaster position="top-center" richColors />
      <div className="flex flex-col overflow-hidden  rounded-md  max md:flex-row w-11/12 md:w-[500px] md:flex-1 mx-auto ">
        <div className="p-5  bg-white w-11/12 md:flex-1 lg:w-2/3 mx-auto ">
          <h3 className="my-4 text-2xl font-semibold text-gray-700 flex justify-center">
            Нэвтрэх
          </h3>
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm  font-semibold text-gray-500"
              >
                Имэйл
              </label>
              <input
                placeholder="Имэйл"
                type="email"
                id="email"
                autoFocus
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-100 px-4 py-4  transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-gray-200"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between relative">
                <label
                  htmlFor="password"
                  className="text-sm  font-semibold text-gray-500"
                >
                  Нууц үг
                </label>
              </div>
              <div className="relative flex flex-col">
                <input
                  placeholder="Нууц үг"
                  type={type}
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-100  px-4 py-4 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-gray-200"
                />
                <button
                  type="button"
                  onClick={handleToggle}
                  data-hs-toggle-password='{
          "target": "#hs-toggle-password"
          }'
                  className="absolute top-0 end-0 flex items-center p-3.5 rounded-e-md  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <Icon icon={icon} size={25} />
                </button>
                <Link href="reset-pass" className="text-sm text-slate-800  hover:underline focus:text-blue-800 flex justify-end">
                  Нууц үг сэргээх
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2"></div>
            <div className="form-control">
          <div className="flex items-center">
            <input type="checkbox"  className="checkbox"  checked={checked} onChange={handleChange} />
            <label className="label cursor-pointer">
              <span className="label-text">Админ эрхээр нэвтрэх</span>
            </label>
          </div>
        </div>
            <div>
              <button
                type="button"
                className="w-full flex justify-center  mx-auto px-4 py-4 text-lg  text-gray-400 transition-colors duration-300 bg-gray-200 rounded-md shadow hover:bg-green-600 hover:text-white focus:outline-none focus:ring-blue-200 focus:ring-4"
                // style={{cursor:cursor}}
                onClick={login}
              >
                Нэвтрэх
              </button>
            </div>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <div className="flex flex-col">
                  <span>Эсвэл</span>
                </div>
              </span>
              <Link href="sign-up">
                <button
                  type="button"
                  className="w-full flex justify-center mx-auto px-4 py-4 text-lg   transition-colors duration-300 border border-green-400 text-black rounded-md shadow hover:bg-green-400 hover:text-white focus:outline-none focus:ring-blue-200 focus:ring-4"
                  

                >
                  Бүртгүүлэх
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
