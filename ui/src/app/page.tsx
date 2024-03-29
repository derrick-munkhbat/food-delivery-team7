"use client";

import { FastDeliveryCard } from "@/components/homePage/FastDeliveryCard";
import { HomeSlider } from "../components/homePage/HomeSlider";
import { HomeFoodCards } from "@/components/homePage/HomeFoodCards";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <FastDeliveryCard />
      <HomeFoodCards />
    </>
  );
}
