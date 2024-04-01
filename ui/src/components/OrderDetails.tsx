export default function OrderDetails() {
  return (
    <div>
      <div className="border w-[432px] h-[720px] shadow-md rounded-lg p-6">
        <div>
          <h1 className="font-normal text-xl">Захиалгын дэлгэрэнгүй</h1>
        </div>
        <div className="flex mt-5 p-4 gap-5 justify-between">
          <div className="flex">
            <p>Main pizza</p>
          </div>
          <p>(1)</p>
        </div>
        <div className="divider m-0"></div>
        <div className="flex mt-5 p-4 gap-5 justify-between">
          <div className="flex">
            <p>Хулууны зутан шөл</p>
          </div>
          <p>(1)</p>
        </div>
        <div className="divider m-0"></div>
      </div>
    </div>
  );
}
