import { Card } from "@/components/cards/Card";

export function HomeSlider() {
  return (
    <div className="w-full h-[788px] flex justify-between items-center bg-[url('/images/bg-image.png')] bg-[#18BA51] relative overflow-hidden">
      <div className="container flex justify-between mx-auto  items-center">
        <div className="w-[384px]   gap-10 ">
          <h1 className="text-[55px] text-balance font-semibold mb-[23px]	 text-white">
            Pinecone Food delivery
          </h1>
          <div className="border border-white border-opacity-50"></div>
          <p className="text-[22px] mt-[23px] text-white font-semibold">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <img
          className="w-[588px] h-[438px]"
          src="/images/card-photo.png"
          alt=""
        />
      </div>
    </div>
  );
}
