export const CardData = [
  { id: "1", name: "Өглөөний хоол", price: 12800, oldPrice: 16800 ,  image: "../images/Image.svg"},
  { id: "2", name: "Зайрмаг", price: 12800, oldPrice: 16800, image: "../images/Icecream.svg",},
  { id: "3", name: "Өглөөний хоол", price: 12800, oldPrice: 16800, image: "../images/Icecream.svg", },
  { id: "4", name: "Breakfast", price: 12800, oldPrice: 16800 ,  image: "../images/Image.svg" },
  { id: "5", name: "Breakfast", price: 12800, oldPrice: 16800 ,  image: "../images/Image.svg" },
  { id: "6", name: "Breakfast", price: 12800, oldPrice: 16800 ,  image: "../images/Image.svg" },
  { id: "7", name: "Breakfast", price: 12800, oldPrice: 16800 ,  image: "../images/Image.svg" },
  { id: "8", name: "Breakfast", price: 12800, oldPrice: 16800 ,  image: "../images/Image.svg"},
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
