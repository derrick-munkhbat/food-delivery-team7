import { HeaderLogo } from "../../public/Headerlogo";
import { NevtrehIcon } from "../../public/Nevtrehicon";
import { SagsIcon } from "../../public/SagsIcon";
import { SearchIcon } from "../../public/SearchIcon";

export function Header() {
  return (
    <div className="top-0 z-10 bg-white  h-[57px] justify-between   flex gap-5 container mx-auto border px-5 py-5 xl:py-[8px]  xl:px-[24px] ">
      <div className=" font-bold flex gap-8 justify-center items-center">
        <HeaderLogo />
        <h2 className="text-[#18BA51]">НҮҮР</h2>
        <h2>ХООЛНЫ ЦЭС</h2>
        <h2>ХҮРГЭЛТИЙН БҮС</h2>
      </div>
      <div className=" flex gap-5">
        <div className="flex justify-center items-center">
          <label className="input h-[35px] input-bordered flex items-center gap-2">
            <SearchIcon />
            <input type="text" className="grow" placeholder="Хайх" />
          </label>
        </div>
        <div className="flex gap-3 font-bold  items-center ">
          <SagsIcon />
          <p>Сагс</p>
        </div>
        <div className="flex gap-3 font-bold items-center ">
          <NevtrehIcon />
          <p>Нэвтрэх</p>
        </div>
      </div>
    </div>
  );
}
