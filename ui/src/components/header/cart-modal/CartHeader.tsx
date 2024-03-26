"use client";
import { ArrowIcon } from "@/components/icons/ArrowIcon";

export function CartHeader() {
  return (
    <div className="flex w-full h-12 items-center">
      <div>
        <ArrowIcon />
      </div>
      <p className="flex w-full items-center justify-center text-2xl">Таны сагс</p>
    </div>
  );
}
