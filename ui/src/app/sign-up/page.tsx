import { SignUp } from "@/components/SignUp"
import { Input } from "@/components/Input"

export default function Sign(){
    return  <div className="flex items-center md:w-[500px] w-2/3 min-h-screen lg:justify-center  mx-auto">
    <div
      className="flex flex-col overflow-hidden  rounded-md  max md:flex-row md:flex-1 md:w-[500px] mx-auto"
    >
      <Input/>
    </div>
  </div>
}
