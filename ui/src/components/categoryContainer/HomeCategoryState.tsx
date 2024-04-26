import { useEffect, useState } from "react";
import { fetcher } from "@/app/util";
import { usePathname, useRouter } from "next/navigation";
import { useCategory, useFood } from "@/app/globals";
import axios from "axios";
import { Loading } from "../Loading";
import { Star } from "../icons/Star";
import { FaChevronRight } from "react-icons/fa";
import { OnSaleCards } from "../cards/OnSaleCard";
import { MainCourseGet } from "../cards/MainCourseGet";

export function HomeCategoryState() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    fetcher("category").then((data) => {
      setCategories(data);
      setLoading(false);
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

  const pushToCategory = (_id: string) => {
    router.push(`/menu/${_id}`);
  };

  if (loading) return <Loading />;
  return (
    <div className="flex sm:p-8 md:p-25 xl:p-25 2xl:p-32">
      <div className=" flex-col mx-auto  gap-[47px] grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-1">
        {categories.map((category: any) => (
          <div>
            <div
              onClick={() => pushToCategory(category._id)}
              key={category._id}
            >
              <div>
                <div className="flex gap-3 w-full justify-between">
                  <div className="flex gap-3 items-center">
                    <Star />
                    <p
                      onClick={() => {
                        handleCategory(category._id);
                      }}
                      key={category._id}
                      className={`font-bold text-2xl w-full flex items-center cursor-pointer px-4 duration-500  text-black lg:w-[280.5px] h-[43px] ${
                        pathname === `/menu/${category._id}`
                          ? "bg-green-500 text-white"
                          : "bg-white"
                      } `}
                    >
                      {category.name}
                    </p>
                  </div>
                  <div
                    onClick={() => {
                      handleCategory(category._id);
                    }}
                    key={category._id}
                    className="flex cursor-pointer items-center text-[#18BA51] font-normal text-sm"
                  >
                    <p>Бүгдийг харах</p>
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <OnSaleCards size={4} /> */}
              <MainCourseGet size={4} categoryId={category._id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
