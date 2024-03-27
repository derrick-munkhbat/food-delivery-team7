import { AddIcon } from "@/components/icons/AddIcon";
import { MinusIcon } from "@/components/icons/MinusIcon";

export default function CartCard() {
  return (
    <div className="card w-[538px] h-[182px] bg-base-100 border-2">
      <div className="flex justify-even items-center w-full h-full p-5 gap-3">
        <div className="w-1/2">
          <img src="/images/pizza.jpg" alt="entree" />
        </div>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col items-start">
            <h2>Pizza</h2>
            <p>34,800₮</p>
            <p>Хулуу, төмс, лууван, сонгино, цөцгийн тос, самрын үр</p>
          </div>
          <div className="flex justify-start items-center gap-6 mt-3">
            <button>
              <MinusIcon />
            </button>
            <p>1</p>
            <button>
              <AddIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
