import { CloseIcon } from "@/components/icons/CloseIcon";
import { useState, useEffect } from "react";

export function showModal() {
  document.getElementById("menu_modal").showModal();
}

export function AddMenu() {
  const [foodName, setFoodName] = useState("");
  const [foodCategory, setFoodCategoy] = useState("");
  const [foodInredients, setFoodIngredients] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [foodSales, setFoodSales] = useState("");
  const [salesPercentage, setSalesPercentage] = useState("");
  const [foodImg, setFoodImg] = useState("");

  // toggleModal(session, menu_modal, toggle = "toggle")


  const hideModal = () => {
    document.getElementById("menu_modal").close();
  } 

  // add menu
  const newMenu = () => {
    hideModal;
  }

  return (
    <div>
      <button className="btn sm:btn-sm md:btn-md bg-[#18BA51] text-white no-animation" onClick={showModal}>
        Add new food
      </button>

      <dialog id="menu_modal" className="modal">
        <div className="border-1 rounded-2xl bg-white w-[587px]">
          <div className="px-4 py-6 flex justify-between align-center items-center">
            <div className="p-1.5" onClick={hideModal}>
            <CloseIcon />
            </div>
            <h1 className="text-[#161616] text-2xl font-bold text-center">
              Create food
            </h1>
            <div className="size-6"></div>
          </div>

          <div className="divider m-0" />

          <div className="p-6 grid gap-4">
            <div className="grid gap-2">
              <p className="text-sm font-medium text-[#121316]">Хоолны нэр</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w"
                value={foodName}
              />
            </div>

            <div className="grid gap-2">
              <p className="text-sm font-medium text-[#121316]" >Хоолны ангилал</p>
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                  Click
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Breakfast</a>
                  </li>
                  <li>
                    <a>Soup</a>
                  </li>
                  <li>
                    <a>Main Course</a>
                  </li>
                  <li>
                    <a>Desserts</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid gap-2">
              <p className="text-sm font-medium text-[#121316]">Хоолны орц</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w"
                value={foodInredients}
              />
            </div>
            <div className="grid gap-2">
              <p className="text-sm font-medium text-[#121316]">Хоолны үнэ</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w"
                value={foodPrice}
              />
            </div>

            <div className="grid gap-2">
              <div className="flex gap-2">
                <input type="checkbox" className="toggle toggle-xs" />
                <p className="text-sm font-medium text-[#121316]">
                  Хямдралтай эсэх
                </p>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w"
              />
            </div>
            <div className="grid gap-2">
              <p className="text-sm font-medium text-[#121316]">Хоолны зураг</p>
              <input type="image" src="img_submit.gif" alt="Submit" width="48" height="48"></input>
            </div>
          </div>

          <div className="divider m-0" />
          <div className="p-6 flex gap-4 justify-end">
            <button className="btn btn-ghost">Clear</button>
            <button className="btn btn-neutral" onClick={newMenu}>Continue</button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
