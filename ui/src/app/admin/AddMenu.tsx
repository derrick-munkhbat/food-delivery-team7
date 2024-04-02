import { CloseIcon } from "@/components/icons/CloseIcon";
import { useState, useEffect } from "react";
import { categories } from "@/components/CategoryData";
import axios from "axios";
import Select from "react-select";

export function showModal() {
  document.getElementById("menu_modal").showModal();
}

export function AddMenu() {

  type Menu = {
    foodName: string;
    foodCategory: string;
    foodIngredients: string;
    foodPrice: number;
    salesPercentage: number;
    foodImg: string;
  }

  const [foodName, setFoodName] = useState("");
  const [foodIngredients, setFoodIngredients] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [foodSales, setFoodSales] = useState("");
  const [salesPercentage, setSalesPercentage] = useState("");
  const [foodImg, setFoodImg] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const hideModal = () => {
    document.getElementById("menu_modal").close();
  };
  // add menu
  const newMenu = async () => {
    // if (
    //   !foodName ||
    //   !foodCategory ||
    //   !foodIngredients ||
    //   !foodPrice ||
    //   !salesPercentage ||
    //   !foodImg
    // ) {
    //   // show alert screen
    //   return;
    // }

    const newMenu: Menu = {
      foodName,
      foodCategory: selectedCategory ? selectedCategory.value : '',
      foodIngredients,
      foodPrice,
      salesPercentage,
      foodImg,
    };

    console.log(newMenu);

    await axios
      .post("http://localhost:3000/menu/create", { ...newMenu })
      .then(() => {
        handleClear;
        hideModal;
      });
  };

  const handleClear = () => {
    setFoodName("");
    setFoodIngredients("");
    setFoodPrice("");
    setFoodSales("");
    setSalesPercentage("");
    setFoodImg("");
  };

  const handleFoodName = (event ) => {
    setFoodName(event?.target.value);
  };

  const handleFoodIngredients = (event) => {
    setFoodIngredients(event?.target.value);
  };

  const handleFoodPrice = (event) => {
    setFoodPrice(event?.target.value);
  };

  const handleSalesPercentage = (event) => {
    setSalesPercentage(event?.target.value);
  };

  const handleFoodImg = (event) => {
    setFoodImg(event?.target.value);
  };

  const options = categories.map((category) => {
    return {
      value: category.name,
      label: category.name,
    };
  });

  return (
    <div>
      <button
        className="btn sm:btn-sm md:btn-md bg-[#18BA51] text-white no-animation"
        onClick={showModal}
      >
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
                onChange={handleFoodName}
                value={foodName}
              />
            </div>

            <div className="grid gap-2">
              <p className="text-sm font-medium text-[#121316]">
                Хоолны ангилал
              </p>
              <Select
                className="basic-single border-0 rounded-xl"
                classNamePrefix="select"
                defaultValue={selectedCategory}
                onChange={(value) => setSelectedCategory(value)}
                options={options}
              />
            </div>

            <div className="grid gap-2">
              <p className="text-sm font-medium text-[#121316]">Хоолны орц</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w"
                onChange={handleFoodIngredients}
                value={foodIngredients}
              />
            </div>
            <div className="grid gap-2">
              <p className="text-sm font-medium text-[#121316]">Хоолны үнэ</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w"
                onChange={handleFoodPrice}
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
                onChange={handleSalesPercentage}
                value={salesPercentage}
              />
            </div>
            <div className="grid gap-2">
              <p className="text-sm font-medium text-[#121316]">Хоолны зураг</p>
              <input
                type="image"
                src="img_submit.gif"
                alt="Submit"
                width="48"
                height="48"
                onChange={handleFoodImg}
              ></input>
            </div>
          </div>

          <div className="divider m-0" />
          <div className="p-6 flex gap-4 justify-end">
            <button className="btn btn-ghost" onClick={handleClear}>
              Clear
            </button>
            <button className="btn btn-neutral" onClick={newMenu}>
              Continue
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
