import { Complated } from "../states/Complated";

export function SuccessOrder() {
  return (
    <div>
      <div className="flex mt-5 p-4 gap-5">
        <Complated />
        <div>
          <p>Захиалга #23790</p>
          <p className="text-[#0468C8] text-sm">Хүлээгдэж буй</p>
        </div>
        <p className="my-auto">2024/04/26</p>
      </div>
      <div className="divider m-0 "></div>
    </div>
  );
}
