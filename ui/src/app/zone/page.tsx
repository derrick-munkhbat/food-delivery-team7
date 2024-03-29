import { Star } from "@/components/icons/Star";

export default function Zone() {
  return (
    <div>
      <div className="flex container mx-auto my-auto">
        <img src="./images/map.png" alt="map" />
      </div>

      <div className="container mx-auto flex gap-3 items-center">
        <Star />
        <h1 className="font-bold text-2xl">Хүргэлтийн бүс дэх хаягууд</h1>
      </div>
    </div>
  );
}
