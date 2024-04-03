import { AddIcon } from "@/components/icons/AddIcon";
import { ChangeEventHandler, useEffect, useState } from "react";
import { fetcher } from "../util";
import axios from "axios";

type Category = {
  name: string;
  _id: string;
};

export function AddCategory() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    fetcher("category").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const createCategory = async () => {
    try {
      axios.post(`http://localhost:8000/category`, {
        name: newCategory,
      });
    } catch (error) {
      console.error(error);
    }
    closeModal();
  };

  const showModal = () => {
    return document.getElementById("my_modal_3").showModal();
  };

  const closeModal = () => {
    return document.getElementById("my_modal_3").close();
  };

  return (
    <div>
      <button
        onClick={showModal}
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
              onChange={(event) => setNewCategory(event.target.value)}
              type="text"
              placeholder="Type here"
              className="input w-[100%] input-bordered max-w-xs"
            />
          </div>
          <div className="flex items-center gap-5 ml-[65%]">
            <p className="font-bold text-base text-[#3F4145]">Clear</p>
            <button
              className="w-[109px] h-[40px] border px-[16px] py-[10px] rounded bg-[#393939] flex items-center text-white"
              onChange={createCategory}
            >
              Continue
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
