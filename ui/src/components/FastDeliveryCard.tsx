import { Book } from "./icons/Book";
import { Clock } from "./icons/Clock";
import { Food } from "./icons/Food";

export function FastDeliveryCard() {
  return (
    <div className="flex p-40">
      <div className="mx-auto flex gap-[47px]">
        <div className="w-[270px] h-[155px] border rounded-xl shadow-xl  flex p-4">
          <div>
            <div className="p-5">
              <Book />
            </div>

            <h1 className="font-bold">Хүргэлтийн төлөв хянах</h1>
            <p className="font-normal text-sm">
              Захиалга бэлтгэлийн явцыг хянах
            </p>
          </div>
        </div>
        <div className="w-[270px] h-[155px] border rounded-xl shadow-xl  flex p-4">
          <div>
            <div className="p-5">
              <Clock />
            </div>

            <h1 className="font-bold">Шуурхай хүргэлт</h1>
            <p className="font-normal text-sm">
              Захиалга бэлтгэлийн явцыг хянах
            </p>
          </div>
        </div>
        <div className="w-[270px] h-[155px] border rounded-xl shadow-xl  flex p-4">
          <div>
            <div className="p-5">
              <Food />
            </div>

            <h1 className="font-bold">Эрүүл, баталгаат орц</h1>
            <p className="font-normal text-sm">
              Захиалга бэлтгэлийн явцыг хянах
            </p>
          </div>
        </div>
        <div className="w-[270px] h-[155px] border rounded-xl shadow-xl  flex p-4">
          <div>
            <div className="p-5">
              <Book />
            </div>

            <h1 className="font-bold">Хоолны өргөн сонголт</h1>
            <p className="font-normal text-sm">
              Захиалга бэлтгэлийн явцыг хянах
            </p>
          </div>
        </div>
        <div className="w-[270px] h-[155px] border rounded-xl shadow-xl  flex p-4">
          <div>
            <div className="p-5">
              <Book />
            </div>

            <h1 className="font-bold">Хоолны өргөн сонголт</h1>
            <p className="font-normal text-sm">
              Захиалга бэлтгэлийн явцыг хянах
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
