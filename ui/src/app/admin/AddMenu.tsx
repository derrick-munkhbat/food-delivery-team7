import { CloseIcon } from "@/components/icons/CloseIcon";
import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { fetcher } from "../util";
import { Modal } from "@/components/Modal";


export function AddMenu({open, onClose} : {open: Boolean, onClose: () => void}) {
  type Menu = {
    name: string;
    category: string;
    ingredients: string;
    price: number;
    sales: number;
    image: string;
  };

  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState("");
  const [foodSales, setFoodSales] = useState(false);
  const [sales, setSales] = useState("");
  const [image, setImage] = useState("");

  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fecthCategories();
  }, []);

  const fecthCategories = () => {
    fetch("http://localhost:8000/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  // add menu
  const newFood = async () => {
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

    const newFood: Menu = {
      name,
      category: selectedCategory ? selectedCategory.value : "",
      ingredients,
      price,
      sales,
      image,
    };


    await axios
      .post("http://localhost:8000/food", { ...newFood })
      .then(() => {
        handleClear;
        onClose();
      });
  };

  const handleClear = () => {
    setName("");
    setIngredients("");
    setPrice("");
    setSales("");
    setImage("");
  };

  const handleName = (event : React.ChangeEvent<HTMLInputElement>) => {
    setName(event?.target.value);
  };

  const handleIngredients = (event : React.ChangeEvent<HTMLInputElement>) => {
    setIngredients(event?.target.value);
  };
  
  const handlePrice = (event : React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event?.target.value);
  };

  const handleSales = (event : React.ChangeEvent<HTMLInputElement>) => {
    setSales(event?.target.value);
  };

  const handleFoodImg = (event : React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    setFileToBase(file);
    setImage(event?.target.value);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    }
  }

  const options = categories.map((category) => {
    return {
      value: category._id,
      label: category.name,
    };
  });

  return (
    <div>
      <Modal open={open}>
          <div className="border-1 rounded-2xl bg-white w-[587px]">
            <div className="px-4 py-6 flex justify-between align-center items-center">
              <div className="p-1.5" onClick={() => onClose()}>
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
                  onChange={handleName}
                  value={name}
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
                  onChange={handleIngredients}
                  value={ingredients}
                />
              </div>
              <div className="grid gap-2">
                <p className="text-sm font-medium text-[#121316]">Хоолны үнэ</p>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w"
                  onChange={handlePrice}
                  value={price}
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
                  onChange={handleSales}
                  value={sales}
                />
              </div>
              <div className="grid gap-2">
                <p className="text-sm font-medium text-[#121316]">Хоолны зураг</p>

                <div className="w-[284px] h-[122px] bg-[#BABCC4]/[12%] border-[1px] border-dashed border-[#D6D7DC] text-[#525252] rounded-lg">
                  <div className="flex flex-col gap-2 items-center mt-6">
                    <h3>Add image for the food</h3>
                    <label htmlFor="file" className="cursor-pointer">
                      <div className="bg-[#393939] px-2 py-1 flex border rounded-lg text-white">
                        <span>Add image</span>
                      </div>
                      <input id="file" type="file" className="hidden" />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="divider m-0" />
            <div className="p-6 flex gap-4 justify-end">
              <button className="btn btn-ghost" onClick={handleClear}>
                Clear
              </button>
              <button className="btn btn-neutral" onClick={newFood}>
                Continue
              </button>
            </div>
          </div>
      </Modal>
    </div>
  );
}
