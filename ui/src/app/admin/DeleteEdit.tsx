import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { DetailIcon } from "../../components/icons/DetailIcon";
import axios from "axios";
import { ChangeEventHandler, PropsWithChildren, useState } from "react";
// import { Toaster, toast } from "sonner";

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
          // toast.error(`"${name}" this category is successfully deleted `);
          onChange();
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
  // ----UPDATE CATEGORY----//
  async function showModal(id: string) {
    document?.getElementById(id)?.showModal();
    console.log(id);
  }

  async function closeModal(id: string) {
    document?.getElementById(id)?.close();
    console.log(id);
  }

  async function handleEditCategory(id: string) {
    if (!name) return;

    try {
      await axios
        .put(`http://localhost:8000/category/${id}`, { name })
        .then(() => {
          onChange();
        });
    } catch (error) {
      console.log(error);
    }

    closeModal(id);
  }

  const handleEditName: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  };

  function deleteAll() {
    setName("");
    return;
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
        <li onClick={() => showModal(categoryId)}>
          <div className="text-black">
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
        <div>
          <input
            className="input flex justify-start input-bordered w-full max-w-xs"
            type="text"
            value={name}
            onChange={handleEditName}
          />
          <div className="flex items-center gap-5 ml-[65%] mt-3">
            <button onClick={deleteAll}>Clear</button>
            <button
              onClick={() => handleEditCategory(categoryId)}
              className="w-[109px] h-[40px] border px-[16px] py-[10px] rounded bg-[#393939] flex items-center text-white"
            >
              Continue
            </button>
            {/* <Toaster richColors /> */}
          </div>
        </div>
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
    <dialog id={categoryId} className="modal z-10">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg justify-center flex items-center">
          Create new category
        </h3>
        <div className="divider m-0"></div>
        <p className="py-4 flex justify-start">Category name</p>
        {children}
      </div>
    </dialog>
  );
};
