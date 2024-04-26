import { useEffect, useState } from "react";
import { useMainCourse, useSaledFoods } from "@/app/globals";
import { getOnMainCourse, getOnSaleFoods } from "@/app/util";
import { HomeFoods } from "./HomeFoods";

export function MainCourseGet({
  size,
  categoryId,
}: {
  size?: number;
  categoryId: string;
}) {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getOnMainCourse(size, categoryId).then((data) => {
      setFoods(data);
    });
  }, []);

  return <HomeFoods foods={foods} />;
}
