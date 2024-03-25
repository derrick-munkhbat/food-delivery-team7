export default function HomePage() {
  return (
    <div className="w-full h-[788px] flex justify-between align-center bg-[url('/images/bg-image.png')] bg-[#18BA51] relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-[384px] gap-10 ">
          <h1 className="text-[55px] text-balance font-semibold mb-[23px]	 text-white">
            Pinecone Food delivery
          </h1>
          <div className="border border-white border-opacity-50"></div>
          <p className="text-[22px] mt-[23px] text-white font-semibold">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex relative  ">
          <img
            className="w-[443px] h-[438px] z-0 "
            src="/images/Food.png"
            alt=""
          />
          <img
            className="absolute w-[313px] bottom-0 -right-40  z-10 "
            src="/images/Food1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
