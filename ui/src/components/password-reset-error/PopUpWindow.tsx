import React from "react";

export default function PopUpWindow({ visible, onClose }) {
  const handleOnCancel = () => {
    onClose();
  };
  if (!visible) return null;

  return (
    <>
      <div
        onClick={handleOnCancel}
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      >
        <div className="flex flex-col bg-white border-2 rounded-2xl justify-center items-center mx-auto w-[384px] h-[228px]">
          <h1 className="text-3xl text-center p-5 font-medium">
            Та системээс гарахдаа итгэлтэй байна уу?
          </h1>
          <div className="flex bg-green-200 justify-around w-full h-full text-2xl rounded-b-xl">
            <button className="hover:bg-green-500 font-bold w-1/2 rounded-b-xl">
              Тийм
            </button>
            <button
              onClick={handleOnCancel}
              className="hover:bg-green-500 font-bold w-1/2 rounded-b-xl"
            >
              Үгүй
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
