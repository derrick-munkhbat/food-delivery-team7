"use client";
import React, { FC, useState } from "react";
import { Card } from "@/components/Card";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, handleClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex items-center absolute inset-0 w-1/3 min-h-screen lg:justify-center  mx-auto">
      <div className="flex flex-col overflow-hidden  rounded-md  max md:flex-row md:flex-1  mx-auto">
        <div className="p-5  flex bg-white md:flex-1  w-2/3 lg:mx-auto gap-5">
          <div className="h-[300px]  bg-green-600">
            <img
              className="rounded-md w-[300px] h-100% cover"
              src="../images/Image.svg"
              alt="Shoes"
            />
          </div>
          <div className="flex flex-col w-1/2 ">
            <div className="flex justify-end ">
              <button className="modal-close-button " onClick={handleClose}>
                X
              </button>
            </div>
            <div>
              <h1>Main pizza</h1>
              <p>34800</p>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-content">{children}</div>
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
    <div className="app-container bg-white">
      <div className="justify-between mt-20 inset-0 w-full mx-auto grid grid-cols-4 gap-5 container  px-5 py-5 xl:py-[8px]  xl:px-[5px]">
        {Card.map((item) => (
          <div key={item.id} className="flex items-center  justify-between">
            <div className="">
              <img
                onClick={handleOpenModal}
                className="cover"
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
