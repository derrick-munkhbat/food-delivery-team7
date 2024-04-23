"use client";

import axios from "axios";
import { useCategory, useFood } from "@/app/globals";
import { useParams } from "next/navigation";
import { AdminCard } from "@/components/cards/AdminCard";
import { BigAddIcon } from "@/components/icons/BigAddIcon";
import { useState } from "react";
import { AddMenu } from "../AddMenu";

export default function AdminMenu() {
  const { _id } = useParams();
  const [open, setOpen] = useState(false);
  const { foods }: any = useFood();

  console.log(_id);

  return (
    <div>
      {foods.length === 0 && (
        <div className="flex flex-col items-center gap-[30px] mt-10">
          <button onClick={() => setOpen(true)}>
            <BigAddIcon />
          </button>
          <p className="text-[#808080]">Уучлаарай, Таны меню хоосон байна.</p>
        </div>
      )}

      <AdminCard />

      <AddMenu open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
