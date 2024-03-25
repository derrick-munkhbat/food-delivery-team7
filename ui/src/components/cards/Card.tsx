export const CardData = [
  { id: "1", name: "Breakfast", price: 12800, oldPrice: 16800 },
  { id: "2", name: "Breakfast", price: 12800, oldPrice: 16800 },
  { id: "3", name: "Breakfast", price: 12800, oldPrice: 16800 },
  { id: "4", name: "Breakfast", price: 12800, oldPrice: 16800 },
  { id: "5", name: "Breakfast", price: 12800, oldPrice: 16800 },
  { id: "6", name: "Breakfast", price: 12800, oldPrice: 16800 },
  { id: "7", name: "Breakfast", price: 12800, oldPrice: 16800 },
  { id: "8", name: "Breakfast", price: 12800, oldPrice: 16800 },
];
export function Card() {
  const price = 4800;

  return (
    <div className="flex w-[282px] h-[253px] gap-1  flex-col">
      <img
        className="w-[282px] object-cover rounded-2xl h-[186px]"
        src="/images/menuZurag.jpg"
        alt=""
      />
      <div className="gap-1">
        <p className="text-xl font-semibold text-black">Өглөөний хоол</p>
        <p className="text-lg font-semibold text-[#18BA51] ">{price}₮ </p>
      </div>
    </div>
  );
}
