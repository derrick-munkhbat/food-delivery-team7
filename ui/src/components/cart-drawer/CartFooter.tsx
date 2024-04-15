"use client";

export function CartFooter() {
  return (
    <div className="flex items-center w-full h-40 self-end border-t-2">
      <div className="flex flex-col w-1/2">
        <p className="font-normal text-slate-600">Нийт төлөх дүн</p>
        <p>34,800₮</p>
      </div>
      <div className="btn btn-enabled w-1/2 max-w-xs hover:bg-green-500">
        <button>Захиалах</button>
      </div>
    </div>
  );
}
