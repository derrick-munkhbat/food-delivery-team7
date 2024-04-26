import { useEffect, useState } from "react";
import { useSaledFoods } from "@/app/globals";
import { getOnSaleFoods } from "@/app/util";
import { HomeFoods } from "./HomeFoods";

export function OnSaleCards({ size }: { size?: number }) {
  const { saledFoods, setSaledFoods }: any = useSaledFoods();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setToken(token);
    getOnSaleFoods(size).then((data) => {
      setSaledFoods(data);
      console.log(data);
    });
  }, []);

  return <HomeFoods foods={saledFoods} />;
}
