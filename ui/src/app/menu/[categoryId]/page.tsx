"use client";

import { UserCard } from "@/components/cards/UserCard";
import { CategoryState } from "@/components/categoryContainer/CategoryState";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Food = {
  name: string;
  price: number;
};

export default function Menu() {
  const { categoryId } = useParams();
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    const getFoodsByCategoryId = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/food?categoryId=${categoryId}`
      );
      setFoods(data);
    };
    getFoodsByCategoryId();
  }, []);

  return (
    <div>
      <CategoryState />
      <div className="container mx-auto">
        <UserCard />
      </div>
    </div>
  );
}
