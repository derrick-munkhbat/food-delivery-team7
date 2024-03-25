export function OnSaleCard() {
  const price = 4800;
  const sale = price + price * 0.2;
  return (
    <div className="flex w-[282px] h-[253px] gap-1  flex-col">
      <div className="bg-[url('/images/menuZurag.jpg')] h-[186px] grid justify-items-end bg-center w-[282px] ">
        <p className="w-[69px] h-[35px] rounded-xl text-lg text-white mt-4 mr-4  font-semibold px-4 py-1 bg-[#18BA51]">
          20%
        </p>
        {/* <img
          className="w-[282px] object-cover  rounded-2xl h-[186px]"
          src="/images/menuZurag.jpg"
          alt=""
        /> */}
      </div>
      <div className="gap-1 ">
        <p className="text-xl font-semibold text-black">Өглөөний хоол</p>
        <div className="flex gap-4">
          <p className="text-lg font-semibold text-[#18BA51] ">{price}₮ </p>
          <p className="line-through text-lg"> {sale}</p>
        </div>
      </div>
    </div>
  );
}
