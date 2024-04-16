"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/header/Header";
import KhorooSelector from "@/components/order/KhorooSelector";
import { Step1 } from "@/components/order/Step1";
import { Step1Wrapper } from "@/components/order/Step1Wrapper";
import { Step2 } from "@/components/order/Step2";
import { Step2Order } from "@/components/order/Step2Order";
import { InputHTMLAttributes, useState } from "react";

export type DeliveryInfo = {
  additionalInfo: string;
  withCard: boolean;
  district: string;
  horoo: string;
  phoneNumber: string;
  apartment: string;
};

export default function Order() {
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    additionalInfo: "",
    withCard: true,
    district: "",
    horoo: "",
    phoneNumber: "",
    apartment: "",
  });

  return (
    <div className="flex mx-auto h-screen  w-full justify-center pt-10 bg-white">
      <div className="flex flex-col max-h-screen w-[432px] container mx-auto ">
        <Step1Wrapper values={deliveryInfo} setValues={setDeliveryInfo} />
      </div>
      <div className="flex flex-col max-h-screen w-[432px]  container mx-auto">
        <Step2Order />
      </div>
    </div>
  );
}

// const ParentComponent = () => {
//   const [stepOneData, setSteOneData] = useState({ disrict: "" });
//   const [stepTwoData, setSteTwoData] = useState({ food: "" });

//   const handleSubmit =async()=> {
//     const response = await axios.post({
//       district: stepOneData.disrict
//       food: stepTwoData.food
//     })
//   }
//   return (
//     <div>
//       <ChildComponentOne
//         stepOneData={stepOneData}
//         setStepOneData={setSteOneData}
//       />
//       <ChildComponentOne
//         stepOneData={stepTwoData}
//         setStepOneData={setSteTwoData}
//       />

//       <button onClick={}>submit</button>
//     </div>
//   );
// };

// const ChildComponentOne = (props: any) => {
//   const { stepOneData, setStateOneData } = props;

//   const handleChangeDistict = (event) => {
//     setStateOneData(event.target.value);
//   };
//   return (
//     <input
//       type="text"
//       value={stepOneData.disrict}
//       onChange={handleChangeDistict}
//     />
//   );
// };
