"use client";

import { AddIcon } from "@/components/icons/AddIcon";
import axios from "axios";
import { useEffect, useState } from "react";
import { fetcher } from "../util";
import { DeleteEdit } from "./DeleteEdit";
import { Loading } from "@/components/Loading";
import { useCategory, useCategoryInfo, useFood } from "../globals";
import { Toaster, toast } from "sonner";
import { green } from "@mui/material/colors";

import { useRouter } from "next/navigation";

type Category = {
  name: string;
  _id: string;
};

export function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function loadCategory() {
    setLoading(true);
    fetcher("category").then((data) => {
      setCategories(data);
      setLoading(false);
    });
  }

  function createCategory() {
    if (!name) {
      toast.warning("! Алдаа гарлаа дахин оролдно уу");
      return;
    }
    axios
      .post("http://localhost:8000/category", {
        name: name,
      })
      .then(() => {
        loadCategory();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        setName("");
        closeModal();
        toast.success(`"${name}" category created successfully `);
      });
  }

  useEffect(() => {
    loadCategory();
  }, []);

  function deleteAll() {
    setName("");
    return;
  }

  function openModal() {
    return setOpen(true);
  }
  function closeModal() {
    return setOpen(false);
  }

  // for global category and menu statements

  const { category, setCategory }: any = useCategory();
  const { categoryInfo }: any = useCategoryInfo();
  const setFoods: any = useFood((state: any) => state.setFoods);
  const setCategoryInfo: any = useCategoryInfo(
    (state: any) => state.setCategoryInfo
  );

  function fetchFood(_id: string) {
    axios
      .get(`http://localhost:8000/food?categoryId=${category}`)
      .then((foods) => setFoods(foods.data));
  }

  const fetchCategoryInfo = (_id: string) => {
    axios
      .get(`http://localhost:8000/category/${_id}`)
      .then((category) => setCategoryInfo(category.data));
  };

  const handleCategory = (_id: string, name: string) => {
    setCategory(_id);
    fetchFood(_id);
    fetchCategoryInfo(_id);

    // dynamin routes
    pushToCategory(name);
  };

  const pushToCategory = (name: string) => {
    router.push(`/admin/${name}`);
  };

  if (loading) return <Loading />;

  return (
    <div className="grid gap-[26px]">
      {categories.map((category) => {
        return (
          <div
            key={category._id}
            className={`btn sm:btn-sm md:btn-md bg-white hover:bg-[#18BA51] justify-between`}
            onClick={() => {
              handleCategory(category._id, category.name);
            }}
          >
            <p className="text-lg font-medium">{category.name}</p>
            <DeleteEdit
              categoryName={category.name}
              categoryId={category._id}
              onChange={loadCategory}
            />
          </div>
        );
      })}
      <div>
        <button
          onClick={openModal}
          className="btn flex bg-white hover:bg-[#18BA51] btn-block "
        >
          <AddIcon />
          <p className="text-lg font-medium text-[#5E6166] hover:text-white ">
            Create New Category
          </p>
        </button>
        <Toaster closeButton richColors />
        <dialog className={`modal ${open ? "modal-open" : ""}`}>
          <div className="modal-box">
            <form method="dialog">
              <button
                onClick={closeModal}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
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
                value={name}
                onChange={(event) => setName(event.target.value)}
                type="text"
                placeholder="Type here"
                className="input w-[100%] input-bordered max-w-xs"
              />
            </div>
            <div className="flex items-center gap-5 ml-[65%]">
              <button onClick={deleteAll}>Clear</button>
              <button
                className="w-[109px] h-[40px] border px-[16px] py-[10px] rounded bg-[#393939] flex items-center text-white"
                onClick={createCategory}
              >
                Continue
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
