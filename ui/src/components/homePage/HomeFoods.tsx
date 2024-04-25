import React, { useEffect, useState } from "react";
import { OnSaleCards } from "../cards/OnSaleCard";
import { Star } from "../icons/Star";
import { FaChevronRight } from "react-icons/fa";

import { useCategory, useFood } from "@/app/globals";
import axios from "axios";
import { Loading } from "../Loading";
import { HomeCategoryState } from "../categoryContainer/HomeCategoryState";

export function HomeFoods() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [loading, setLoading] = useState(true);

  const { _foods, setFoods }: any = useFood();
  const { category }: any = useCategory();

  function fetchFood() {
    axios

      .get(`http://localhost:8000/food?categoryId=${category}`)
      .then((foods) => setFoods(foods.data));
  }

  useEffect(() => {
    setLoading(true);
    fetchFood();
    setLoading(false);
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <HomeCategoryState />
    </div>
  );
}
