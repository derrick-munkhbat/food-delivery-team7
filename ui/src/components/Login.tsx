import Link from "next/link"
import { useState } from "react"
import { HideIcon } from "../../public/Icons/HideIcon"
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

export function Login(){
  const [show, setShow]= useState("")
  const [type, setType]= useState("")
  const [email, setEmail]= useState("")
  const [pass, setPass]= useState("")
  const [icon, setIcon] = useState(()=>eyeOff);
  
  function handleToggle(){
    if (type==='password'){
      setIcon(eye);
      setType('text')
   } else {
      setIcon(eyeOff);
      setType('password')
   }
  }
  return <div className="flex items-center w-11/12  md:w-[500px] min-h-screen   lg:justify-center  mx-auto">
  <div className="flex flex-col overflow-hidden  rounded-md  max md:flex-row w-11/12 md:w-[500px] md:flex-1 mx-auto ">
    <div className="p-5  bg-white w-11/12 md:flex-1 lg:w-2/3 mx-auto ">
      <h3 className="my-4 text-2xl font-semibold text-gray-700 flex justify-center">Нэвтрэх</h3>
      <form action="#" className="flex flex-col space-y-5">
        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-sm  font-semibold text-gray-500">Имэйл</label>
          <input
            placeholder="Имэйл"
            type="email"
            id="email"
            autoFocus
          value={email} onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-100 px-4 py-4  transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-gray-200"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <div className="flex items-center justify-between relative">
            <label htmlFor="password" className="text-sm  font-semibold text-gray-500">Нууц үг</label>
          </div>
          <div className="relative flex flex-col">
          <input
           placeholder="Нууц үг"
            type={type}
          value={pass} onChange={(e) => setPass(e.target.value)}
            className="bg-gray-100  px-4 py-4 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-gray-200"
          />
          <button type="button" onClick={handleToggle} data-hs-toggle-password='{
          "target": "#hs-toggle-password"
          }' className="absolute top-0 end-0 flex items-center p-3.5 rounded-e-md  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              <Icon icon={icon} size={25}/>
          </button>
          <a href="#" className="text-sm text-slate-800  hover:underline focus:text-blue-800 flex justify-end">Нууц үг сэргээх</a>
          </div>          
        </div>
        <div className="flex items-center space-x-2">
        </div>
        <div>
          <button 
            type="submit"
            className="w-full flex justify-center mx-auto px-4 py-4 text-lg  text-gray-400 transition-colors duration-300 bg-gray-200 rounded-md shadow hover:bg-green-600 hover:text-white focus:outline-none focus:ring-blue-200 focus:ring-4"
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
              type="submit"
              className="w-full flex justify-center mx-auto px-4 py-4 text-lg   transition-colors duration-300 border border-green-400 text-black rounded-md shadow hover:bg-green-400 hover:text-white focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
              Бүртгүүлэх
              </button>
          </Link>
        </div>
      </form>
    </div>
  </div>
</div>
}