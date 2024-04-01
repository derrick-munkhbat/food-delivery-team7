export const CardData = [
  { id: "1", name: "Өглөөний хоол", price: 12800, oldPrice: 16800 ,  image: "../images/Image.svg"},
  { id: "2", name: "Зайрмаг", price: 4800, oldPrice: 6800, image: "../images/Icey.svg",},
  { id: "3", name: "Зайрмаг", price: 24800, oldPrice: 26800, image: "../images/Breakfast.svg", },
  { id: "4", name: "Өглөөний хоол", price: 24800, oldPrice: 26800 ,  image: "../images/Image (5).svg" },
  { id: "5", name: "Tort", price: 54800,  image: "../images/Tort.svg" },
  { id: "6", name: "Oreo shake", price: 14800,    image: "../images/OreoShake.svg" },
  { id: "7", name: "Chocolate", price: 14800,    image: "../images/chocolate.svg" },
  { id: "8", name: "Yoghurt", price: 14800,   image: "../images/Yoghurt.svg"},
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
