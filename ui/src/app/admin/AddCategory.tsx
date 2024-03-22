import { AddIcon } from "@/components/icons/AddIcon";

export function AddCategory() {
  return (
    <div>
      <button
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="btn bg-white"
      >
        <AddIcon />
        <p className="text-lg font-medium w-[358px] h-[48px]">
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
          <p className="py-4">Category name</p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </dialog>
    </div>
  );
}
