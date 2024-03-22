import { AddIcon } from "@/components/icons/AddIcon";

export function AddCategory() {
  return (
    <div>
      <button
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="btn flex bg-white hover:bg-[#18BA51] btn-block "
      >
        <AddIcon />
        <p className="text-lg font-medium text-[#5E6166] hover:text-white ">
          Create New Category
        </p>
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
          <div className="divider m-0"></div>
          <div className="">
            <p className="py-4">Category name</p>
            <input
              type="text"
              placeholder="Type here"
              className="input w-[100%] input-bordered max-w-xs"
            />
          </div>
          <div className="flex items-center gap-5 ml-[65%]">
            <p className="font-bold text-base text-[#3F4145]">Clear</p>
            <button className="w-[109px] h-[40px] border px-[16px] py-[10px] rounded bg-[#393939] flex items-center text-white ">
              Continue
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
