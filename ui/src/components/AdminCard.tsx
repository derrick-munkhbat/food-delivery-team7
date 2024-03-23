export function AdminCard() {
  const price = 4800;

  return (
    <div className="flex  w-[282px] h-[253px] gap-1 flex-col">
      <div className="bg-[url('/images/menuZurag.jpg')] relative  grid items-center justify-items-center hover:scale-105 group-hover:opacity-60 h-[186px]  duration-300  rounded-2xl ease-in-out  bg-center w-[282px]">
        {/* <img
          className="w-[282px] hover:scale-105 hover:opacity-60 object-cover duration-300  ease-in-out  rounded-2xl h-[186px]"
          src="/images/menuZurag.jpg"
          alt=""
        /> */}
        <button className="relative animate-bounce z-20 w-[166px] h-[40px] rounded-xl text-lg text-black mt-4 mr-4  font-semibold px-4 py-1 bg-white opacity-0 hover:opacity-90 transition-all">
          EDIT
        </button>
      </div>
      <div className="gap-1">
        <p className="text-xl font-semibold text-black">Өглөөний хоол</p>
        <p className="text-lg font-semibold text-[#18BA51] ">{price}₮ </p>
      </div>
    </div>
  );
}
