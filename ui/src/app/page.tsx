"use client";

import { FastDeliveryCard } from "@/components/FastDeliveryCard";
import { HomeSlider } from "../components/HomeSlider";
import { HomeFoodCards } from "@/components/HomeFoodCards";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <FastDeliveryCard />
      <HomeFoodCards />
    </>
  );
}
