"use client";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useEffect, useState } from "react";
import axios from "axios";
import { fetchUsers } from "@/app/util";
import { Toaster, toast } from 'sonner'
export function Input() {
  const [show, setShow] = useState("password");
  const [hider, setHider] = useState(() => eyeOff)
  const [type, setType] = useState("password");
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [icon, setIcon] = useState(() => eyeOff);
  const[ pass , setPass]= useState("")
  const [address , setAddress] = useState("")

  // useEffect(() => {
  //   fetchUsers()
  //   console.log()
  // },[])
  const submit = async()=>{
    if (pass!==Password || Password.length < 8){
      toast.error('Please check your password')
      return;
    }
    if(!Name || !Email || !Password){
      toast.error('Please fill all the fields')
      return;
    }
    try{
      console.log({Email, Name, Password})
      await axios.post("http://localhost:8000/user/create",{
        Name,
        Email,
        Password,
      });
      setName(""),
      setEmail(""),
      setPassword(""),
      setAddress("")
      setPass(""),


      toast.success('Амжилттай бүртгүүллээ!')
      setTimeout(() => {
        window.location.href = "/sign-in";
      }, 700);
      
      fetchUsers()
    }catch (error){
      // toast.error('Please check your email')
      console.error("Error:", error);
    }

  }
  function handleToggler(){
    if(show === "password"){
      setHider(eye);
      setShow("text");
    }else{
      setHider(eyeOff);
      setShow("password");
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
    <div className="p-5  bg-white md:flex-1 lg:w2/3 lg:mx-auto ">
       <Toaster position="top-center" richColors />
      <h3 className="my-4 text-2xl font-semibold text-gray-700 flex justify-center">
        Бүртгүүлэх
      </h3>
      <div  className="flex flex-col space-y-5">
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="email"
            className="text-sm  font-semibold text-gray-500"
          >
            Нэр
          </label>
          <input
            placeholder="Нэр"
            type="name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            className="bg-gray-100 px-4 py-4  transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-gray-200"
          />
        </div>
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
            autoFocus
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-100 px-4 py-4  transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-gray-200"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="email"
            className="text-sm  font-semibold text-gray-500"
          >
            Хаяг
          </label>
          <input
            placeholder="Хаяг"
            type="location"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            autoFocus
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
              id="password"
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
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="flex items-center justify-between relative">
            <label
              htmlFor="password"
              className="text-sm  font-semibold text-gray-500"
            >
              Нууц үг давтах
            </label>
          </div>
          <div className="relative flex justify-center flex-col ">
            <input
              placeholder="Нууц үг давтах"
              type={show}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="bg-gray-100  px-4 py-4 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-gray-200"
            />
            <button
              type="button"
              onClick={handleToggler}
              data-hs-toggle-password='{
        "target": "#hs-toggle-password"
        }'
              className="absolute top-0 end-0 flex items-center p-3.5 rounded-e-md  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <Icon icon={hider} size={25} />
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-2"></div>
        <div className="form-control">
          <div className="flex items-center">
            <input type="checkbox" defaultChecked className="checkbox" />
            <label className="label cursor-pointer">
              <span className="label-text">Үйлчилгээний нөхцөл зөвшөөрөх</span>
            </label>
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={submit}
            className="w-full flex justify-center mx-auto px-4 py-4 text-lg  text-gray-400 transition-colors duration-300 bg-gray-200 rounded-md shadow hover:bg-green-600 hover:text-white focus:outline-none focus:ring-blue-200 focus:ring-4"
          >
            Бүртгүүлэх
          </button>
        </div>
        <div className="flex flex-col space-y-5"></div>
      </div>
    </div>
  );
}
