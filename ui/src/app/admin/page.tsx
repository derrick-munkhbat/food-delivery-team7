"use client";

import { BigAddIcon } from "@/components/icons/BigAddIcon";
import { AddMenu } from "./AddMenu";
import { AdminCard } from "@/components/cards/AdminCard";
import { useState } from "react";
import { useFood } from "../globals";

export default function AdminPage() {
  const [open, setOpen] = useState(false);
  const { foods }: any = useFood();

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

      <AddMenu open={open} onClose={() => setOpen(false)} />

      <AdminCard />
    </div>
  );
}
