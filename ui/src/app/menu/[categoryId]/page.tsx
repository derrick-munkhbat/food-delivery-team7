"use client";

import { CategoryState } from "@/components/categoryContainer/CategoryState";
import { useParams } from "next/navigation";

export default function Menu() {
  const { categoryId } = useParams();

  console.log(categoryId);

  return (
    <div>
      <CategoryState />
    </div>
  );
}
