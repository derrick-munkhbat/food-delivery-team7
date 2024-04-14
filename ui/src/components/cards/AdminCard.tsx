import { useEffect, useState } from "react";
import { fetcher } from "@/app/util";
import { DeleteIcon } from "../icons/DeleteIcon";
import axios from "axios";
import { AddMenu } from "@/app/admin/AddMenu";
import { EditorMenu } from "@/app/admin/EditorMenu";

export function AdminCard({category} : {category: string}) {
  const [menus, setMenus] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    fetch(`http://localhost:8000/menu`)
      .then((res) => res.json())
      .then((data) => setMenus(data));
  };

  const deleteMenu = async (_id) => {
    await axios.delete(`http://localhost:8000/menu/delete/${_id}`).then(() => {
      fetchMenu();
    });
  };

  console.log(category);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 justify-items-center gap-[60px] mt-10 mb-5">
      {menus.map((menu) => (
        <div className="grid gap-[14px]">
          <div className="w-[282px] hover:scale-105">
            <div className="bg-[url('/images/menuZurag.jpg')] grid items-center justify-items-center group-hover:opacity-60 h-[186px]  duration-300  rounded-2xl ease-in-out  bg-center w-[282px]">
              <div className="flex gap-2 opacity-0 hover:opacity-90 transition-all">
                <button
                  className="z-20 w-[166px] h-[40px] rounded-xl text-lg text-black font-semibold px-4 py-1 bg-white"
                  onClick={() => setOpen(true)}>
                  EDIT
                </button>
                <button
                  className="z-20 s-10 rounded-xl px-4 py-1 bg-white"
                  onClick={() => deleteMenu(menu._id)}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
          <div className="gap-1">
            <p className="text-xl font-semibold text-black">{menu.foodName}</p>
            <p className="text-lg font-semibold text-[#18BA51] ">
              {menu.foodPrice}
            </p>
          </div>

          {/* <EditorMenu 
            open={open}
            _id={menu._id}
            onClose={() => setOpen(false)} /> */}
        </div>
      ))}
    </div>
  );
}
