import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DetailIcon } from "../../../public/Icons/DetailIcon";
import { AddIcon } from "../../../public/Icons/AddIcon";

export default function AdminMenu() {
  return (
    <div className="bg-white">
      <Header />
      <div className="flex container mx-auto w-full">
        <div className="w-1/4 pt-[26px] pr-[26px]">
          <h1 className="text-[22px] text-[#272727] font-bold mb-10">Food menu</h1>
          <div className="grid gap-[26px]">
            <button className="btn bg-white justify-between">
              <p className="text-lg font-medium">Breakfast</p>
              <DetailIcon />
            </button>
            <button className="btn bg-white justify-between">
              <p className="text-lg font-medium">Soup</p>
              <DetailIcon />
            </button>
            <button className="btn bg-white justify-between">
              <p className="text-lg font-medium">Breakfast</p>
              <DetailIcon />
            </button>
            <button className="btn bg-white justify-between">
              <p className="text-lg font-medium">Breakfast</p>
              <DetailIcon />
            </button>
            <button className="btn bg-white">
              <AddIcon />
              <p className="text-lg font-medium">Create New Category</p>
            </button>
          </div>
        </div>
        <div className="w-3/4 bg-[#F7F7F8] pl-6 py-6">
          <div className="flex justify-between py-4">
            <h1 className="text-[22px] text-[#272727] font-bold ">Breakfast</h1>
            <button className="btn">Add new food</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
