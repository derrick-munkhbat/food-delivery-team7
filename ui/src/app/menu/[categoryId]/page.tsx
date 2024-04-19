"use client";

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
        `http://localhost:8000/food/${categoryId}`
      );
      setFoods(data);
    };
    getFoodsByCategoryId();
  }, []);

  return (
    <div>
      <CategoryState />
      <div>
        {foods.map((food) => (
          <FoodCard {...food} />
        ))}
      </div>
    </div>
  );
}

type FoodCardProps = {
  name: string;
  price: number;
};

const FoodCard = ({ name, price }: FoodCardProps) => {
  return (
    <div style={{ display: "flex", gap: 10, border: "1px solid grey" }}>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};
