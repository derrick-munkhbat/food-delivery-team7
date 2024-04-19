"use client";

import { CategoryList } from "./CategoryList";
import MenuComp from "./MenuComp";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="bg-split-background">
        <div className="flex container mx-auto w-full">
          <div className="w-1/4 bg-white py-[26px] pr-[26px]">
            <h1 className="text-[22px] text-[#272727] font-bold mb-10">
              Food menu
            </h1>
            <div className="grid gap-[26px] ">
              <CategoryList />
            </div>
          </div>
          <div className="w-3/4 bg-[#F7F7F8] pl-6 py-6">
            <MenuComp />
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
