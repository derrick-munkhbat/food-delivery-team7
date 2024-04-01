import OrderDetails from "@/components/OrderDetails";
import { SuccessOrder } from "@/components/ordersDetail/SuccessOrder";
import { InProgress } from "@/components/states/InProgress";

export default function OrderHistory() {
  return (
    <div className="flex gap-[180px] mx-auto container p-20 justify-center items-center">
      <div className="border w-[432px] h-[720px] shadow-md rounded-lg p-6">
        <div>
          <h1 className="font-normal text-xl">Захиалгын түүх</h1>
        </div>
        <div className="flex  mt-5 p-4 gap-5">
          <InProgress />
          <div>
            <p>Захиалга #23790</p>
            <p className="text-[#0468C8] text-sm">Хүлээгдэж буй</p>
          </div>
          <p className="my-auto">2024/04/26</p>
        </div>
        <div className="divider m-0 "></div>
        <SuccessOrder />
      </div>
      <OrderDetails />
    </div>
  );
}
