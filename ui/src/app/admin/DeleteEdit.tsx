import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { DetailIcon } from "../../components/icons/DetailIcon";
import axios from "axios";
import { useState } from "react";
import { showModal } from "./AddMenu";

type DeleteEditProps = {
  categoryId: string;
  onChange: () => void;
};

export function DeleteEdit({ categoryId, onChange }: DeleteEditProps) {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

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
    const value = window.prompt("Edit", name);
    if (value) {
      try {
        await axios
          .put(`http://localhost:8000/category/${id}`, { value })
          .then(() => {
            onChange();
          });
      } catch (error) {
        console.log(error);
      }
    }
  }
  function openModal() {
    return setOpen(true);
  }
  function closeModal() {
    return setOpen(false);
  }

  return (
    <div>
      <div className="dropdown dropdown-right dropdown-end">
        <div tabIndex={0} className="m-1  p-2">
          <DetailIcon />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => handleEditCategory(categoryId)}>
            <div onClick={openModal}>
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
      </div>
    </div>
  );
}

// import { FaRegTrashAlt } from "react-icons/fa";
// import { MdModeEdit } from "react-icons/md";
// import { DetailIcon } from "../../components/icons/DetailIcon";
// import axios from "axios";
// import { ChangeEventHandler, PropsWithChildren, useState } from "react";

// type DeleteEditProps = {
//   categoryName: string;
//   categoryId: string;
//   onChange: () => void;
// };

// export function DeleteEdit({
//   categoryName,
//   categoryId,
//   onChange,
// }: DeleteEditProps) {
//   const [name, setName] = useState(categoryName);

//   // ----DELETE CATEGORY----//
//   async function handleDeleteCategory(id: string) {
//     if (window.confirm("Are you sure to delete this category?")) {
//       try {
//         await axios.delete(`http://localhost:8000/category/${id}`).then(() => {
//           console.log("Deleted");
//           onChange();
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }
//   // ----UPDATE CATEGORY----//
//   async function handleEditCategory(id: string) {
//     document.getElementById(id).showModal();
//     console.log(name);

//     if (name) {
//       try {
//         await axios
//           .put(`http://localhost:8000/category/${id}`, { name })
//           .then(() => {
//             // onChange();
//           });
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }

//   const handleEditName: ChangeEventHandler<HTMLInputElement> = (event) => {
//     setName(event.target.value);
//   };

//   return (
//     <div className="dropdown dropdown-right dropdown-end">
//       <div tabIndex={0} className="m-1  p-2">
//         <DetailIcon />
//       </div>
//       <ul
//         tabIndex={0}
//         className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
//       >
//         <li onClick={() => handleEditCategory(categoryId)}>
//           <div>
//             <MdModeEdit />
//             <p>Edit name</p>
//           </div>
//         </li>

//         <li onClick={() => handleDeleteCategory(categoryId)}>
//           <div className="text-[#DF1F29]">
//             <FaRegTrashAlt />
//             <a className="text-[#DF1F29]">Delete Category </a>
//           </div>
//         </li>
//       </ul>
//       <CategoryListEditModal categoryId={categoryId}>
//         <div>
//           <input
//             className="input input-bordered w-full max-w-xs"
//             type="text"
//             value={name}
//             onChange={handleEditName}
//           />
//           <div className="flex items-center gap-5 ml-[65%]">
//             <button>Clear</button>
//             <button
//               onClick={() => handleEditCategory}
//               className="w-[109px] h-[40px] border px-[16px] py-[10px] rounded bg-[#393939] flex items-center text-white"
//             >
//               Continue
//             </button>
//           </div>
//         </div>
//       </CategoryListEditModal>
//     </div>
//   );
// }

// type CategoryListEditModalProps = PropsWithChildren & {
//   categoryId: string;
// };
// const CategoryListEditModal = ({
//   categoryId,
//   children,
// }: CategoryListEditModalProps) => {
//   return (
//     <dialog id={categoryId} className="modal z-10">
//       <div className="modal-box">
//         <form method="dialog">
//           <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//             ✕
//           </button>
//         </form>
//         <h3 className="font-bold text-lg justify-center flex items-center">
//           Create new category
//         </h3>
//         <div className="divider m-0"></div>
//         <div className="">
//           <p className="py-4">Category name</p>
//         </div>
//         {children}
//       </div>
//     </dialog>
//   );
// };
