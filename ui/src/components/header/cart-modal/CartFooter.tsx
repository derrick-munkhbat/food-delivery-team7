"use client";

export function CartFooter() {
  return (
    <div className="flex items-center w-full">
      <div className="flex flex-col w-1/2">
        <p>Нийт төлөх дүн</p>
        <p>34,800₮</p>
      </div>
      <div className="btn btn-enabled w-1/2 max-w-xs bg-green-500">
        <button>Захиалах</button>
      </div>
    </div>
  );
}
