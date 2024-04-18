import { useEffect, useState } from "react";
import { useCategory } from "../../app/globals";
import axios from "axios";
import { useFood } from "@/app/globals";
import { fetcher } from "@/app/util";

export function CategoryState() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetcher("category").then((data) => {
      setList(data);
      console.log(data);
    });
  }, []);

  const { category, setCategory }: any = useCategory();
  const setFoods: any = useFood((state: any) => state.setFoods);

  function fetchFood(_id: string) {
    axios
      .get(`http://localhost:8000/food?categoryId=${_id}`)
      .then((foods) => setFoods(foods.data));
  }

  const handleCategory = (_id: string) => {
    setCategory(_id);
    fetchFood(_id);
  };

  return (
    <div className="  lg:h-[107px] w-10/12 lg:w-full  grid   grid-cols-1 sm:grid-cols-2 lg:flex gap-5 container mx-auto xl:py-[8px]  xl:px-[5px] border-[black] border-1   lg:py-8 bg-white  lg:justify-between">
      {list.map((category: any) => (
        <a
          onClick={() => {
            handleCategory(category._id);
          }}
          key={category._id}
          href=""
          className="hover:bg-[#18BA51] border-[#D6D8DB]  px-4 text-center duration-500 py-2 font-medium	text-lg  border-[1px] rounded-xl text-black border-solid  lg:w-[280.5px]  h-[43px] "
        >
          {category.name}
        </a>
      ))}
    </div>
  );
}
