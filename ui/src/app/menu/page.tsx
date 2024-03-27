"use client";
import React, { FC, useState } from "react";
import { CategoryState } from "@/components/categoryContainer/CategoryState";
import { CardData } from "@/components/cards/Card";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, handleClose, children }) => {
  if (!isOpen) {
    return null;
  }
  const [number , setNumber]= useState(1)
  function MinusNumber(){
    const number = 2;
  }
  

  return (<div className="w-screen flex top-0 h-full justify-center items-center fixed z-1 bg-gray-500 bg-opacity-70">
 <div className="flex items-center fixed z-1 absolute inset-0 w-11/12 lg:w-1/2  justify-center  mx-auto ">
      <div className="flex flex-col overflow-hidden lg:rounded-xl  max md:flex-row  md:flex-1  mx-auto">
        <div className="p-5  flex  bg-white md:flex-1 h-[500px] w-full rounded-xl lg:mx-auto gap-5">
          <div className="h-[500px] hidden md:flex md:w-1/2 ">
            <img
              className="rounded-md w-[500px]  h-[460px] cover"
              src="https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=2048x2048&w=is&k=20&c=t9_zg20wVbrBoGn0tw__1fFq4ykeKs15TQQ3x-ehVC0="
              alt="Shoes"
            />
          </div>
          <div className="flex flex-col w-full  md:w-1/2 ">
            <div className="flex justify-end ">
              <button className="modal-close-button " onClick={handleClose}>
                X
              </button>
            </div>
            <div className="mt-4 w-11/12 mx-auto">
              <h1 className="font-semibold lg:text-3xl lg:font-bold">Breakfast</h1>
              <p className="lg:font-semibold text-green-600">34,800$</p>
              <p className="mt-8 font-semibold">Орц</p>
              <div className="w-11/12 p-2 bg-slate-200 rounded-lg mt-2">
                <p className="text-gray-500">
                  Хулуу , төмс , лууван , сонгино , самрын үр , цөцгийн тос
                </p>
              </div>
              <p className="mt-8 font-semibold">Number</p>
              <div className="mt-4 flex justify-between">
                <button onClick={MinusNumber} className="py-1 px-3 bg-green-500 rounded-md text-white">
                  -
                </button>
                <p>{number}</p>
                <button className="py-1 px-3 bg-green-500 rounded-md text-white">
                  +
                </button>
              </div>
              <button className="container bg-green-500 mt-4 p-3 rounded-md text-white">
                Сагслах
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-content">{children}</div>
    </div>
  </div>
  );
};

const Menu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="mt-10 ">
        <CategoryState />
      </div>

      <div className="app-container bg-white mb-10">
        <div className=" mt-5 inset-0 w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 container gap-x-32 px-5 py-5 xl:py-[8px]  xl:px-[5px]">
          {CardData.map((item) => (
            <div key={item.id} className="flex items-center  justify-between">
              <div className="">
                <img
                  onClick={handleOpenModal}
                  className="cover cursor-grabbing"
                  src="../images/Image.svg"
                />
                <p className="ml-2 font-bold">Breakfast</p>
                <div key={item.id} className="flex gap-4">
                  <p className="ml-2 font-semibold text-green-600">
                    {item.price}
                  </p>
                  <p className="line-through">{item.oldPrice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Modal isOpen={isOpen} handleClose={handleCloseModal}>
          <p></p>
        </Modal>
      </div>
    </div>
  );
};

export default Menu;

// import { Card } from "@/components/Card";

// export default function Menu() {
//   return (
//     <div className="justify-between w-full mx-auto flex gap-5 container  px-5 py-5 xl:py-[8px]  xl:px-[5px]">
//       {Card.map((item) => (
//         <div key={item.id} className="flex items-center  justify-between">
//           <div className="">
//             <img onClick={handleOpenModal} className="cover" src="../images/Image.svg" />
//             <p className="ml-2 font-bold">Breakfast</p>
//             <div key={item.id} className="flex gap-4">
//               <p className="ml-2 font-semibold text-green-600">{item.price}</p>
//               <p className="line-through">{item.oldPrice}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
