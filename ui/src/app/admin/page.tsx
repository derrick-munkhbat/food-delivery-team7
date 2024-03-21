import { DetailIcon } from "../../../public/Icons/DetailIcon";
import { AddIcon } from "../../../public/Icons/AddIcon";

export default function AdminMenu() {
  return (
    <div className="bg-white">
      <div className="flex container mx-auto w-full">
        <div className="w-1/4 pt-[26px] pr-[26px]">
          <h1 className="text-[22px] text-[#272727] font-bold mb-10">
            Food menu
          </h1>
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
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="btn bg-white"
            >
              <AddIcon />
              <p className="text-lg font-medium text-[#5E6166]">Create New Category</p>
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg justify-center flex items-center">
                  Create new category
                </h3>
                <p className="py-4">Category name</p>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </dialog>
          </div>
        </div>
        <div className="w-3/4 bg-[#F7F7F8] pl-6 py-6">
          <div className="flex justify-between py-4">
            <h1 className="text-[22px] text-[#272727] font-bold ">Breakfast</h1>
            <button className="btn">Add new food</button>
          </div>
        </div>
      </div>
    </div>
  );
}
