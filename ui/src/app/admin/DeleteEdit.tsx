import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { DetailIcon } from "../../components/icons/DetailIcon";
import axios from "axios";
import { ChangeEventHandler, PropsWithChildren, useState } from "react";

type DeleteEditProps = {
  categoryName: string;
  categoryId: string;
  onChange: () => void;
};

export function DeleteEdit({
  categoryName,
  categoryId,
  onChange,
}: DeleteEditProps) {
  const [name, setName] = useState(categoryName);

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
    document.getElementById(id).showModal();
    console.log(name);
    // try {
    //   await axios.put(`http://localhost:8000/category/${id}`).then(() => {});
    // } catch (error) {
    //   console.log(error);
    // }
  }

  const handleEditName: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  };

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
          <div>
            <MdModeEdit />
            <p>Edit name</p>
          </div>
        </li>

        <li onClick={() => handleDeleteCategory(categoryId)}>
          <div className="text-[#DF1F29]">
            <FaRegTrashAlt />
            <a className="text-[#DF1F29]">Delete Category </a>
          </div>
        </li>
      </ul>
      <CategoryListEditModal categoryId={categoryId}>
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          value={name}
          onChange={handleEditName}
        />
      </CategoryListEditModal>
    </div>
  );
}

type CategoryListEditModalProps = PropsWithChildren & {
  categoryId: string;
};
const CategoryListEditModal = ({
  categoryId,
  children,
}: CategoryListEditModalProps) => {
  return (
    <dialog id={categoryId} className="modal">
      <div className="modal-box">
        {children}
        <form method="dialog">
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
          <button>Clear</button>
          <button className="w-[109px] h-[40px] border px-[16px] py-[10px] rounded bg-[#393939] flex items-center text-white">
            Continue
          </button>
        </div>
      </div>
    </dialog>
  );
};
