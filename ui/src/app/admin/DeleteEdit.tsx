import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { DetailIcon } from "../../components/icons/DetailIcon";
import axios from "axios";
import { useState } from "react";

type DeleteEditProps = {
  categoryId: string;
  onChange: () => void;
};

const showModal = () => {
  return document.getElementById("my_modal_3").showModal();
};

export function DeleteEdit({ categoryId, onChange }: DeleteEditProps) {
  const [name, setName] = useState("");

  // ----DELETE CATEGORY----//
  async function handleDeleteCategory(id: string) {
    if (window.confirm("Are you sure to delete this category?")) {
      try {
        await axios.delete(`http://localhost:8000/category/${id}`).then(() => {
          console.log("Deleted");
          onChange();
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
  // ----UPDATE CATEGORY----//
  async function handleEditCategory(id: string) {
    {
      try {
        await axios.put(`http://localhost:8000/category/${id}`).then(() => {});
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="dropdown dropdown-right dropdown-end">
      <div tabIndex={0} className="m-1  p-2">
        <DetailIcon />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li onClick={() => handleEditCategory(categoryId)}>
          <div onClick={showModal}>
            <MdModeEdit />
            <a>Edit name</a>
          </div>
        </li>

        <li onClick={() => handleDeleteCategory(categoryId)}>
          <div className="text-[#DF1F29]">
            <FaRegTrashAlt />
            <a className="text-[#DF1F29]">Delete Category </a>
          </div>
        </li>
      </ul>
      <dialog className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg justify-center flex items-center">
            Edit category
          </h3>
          <div className="divider m-0"></div>
          <div className="">
            <p className="py-4">Category name</p>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Type here"
              className="input w-[100%] input-bordered max-w-xs"
            />
          </div>
          <div className="flex items-center gap-5 ml-[65%]">
            <button>Clear</button>
            <button
              className="w-[109px] h-[40px] border px-[16px] py-[10px] rounded bg-[#393939] flex items-center text-white"
              onClick={() => handleEditCategory}
            >
              Continue
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
