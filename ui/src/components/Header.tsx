
import { HeaderLogo } from "../../public/Headerlogo"

export function Header (){

    return (
        <div className="top-0 z-10 bg-white  justify-between flex gap-5 container mx-auto border px-5 py-5 xl:py-8 xl:px-[250px] ">
           <HeaderLogo/>
        </div>
    )
}