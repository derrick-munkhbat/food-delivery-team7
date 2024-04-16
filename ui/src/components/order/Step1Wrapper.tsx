"use client";

import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import ApartmentSelector from "./ApartmentSelector";
import DistrictSelector from "./DistrictSelector";
import KhorooSelector from "./KhorooSelector";
import { Input, SelectChangeEvent } from "@mui/material";
import { Step1 } from "./Step1";
import { DeliveryInfo } from "@/app/order/page";
import { TbArrowWaveRightDown } from "react-icons/tb";
import { MuiTelInput } from "mui-tel-input";

type Step1WrapperProps = {
  values: DeliveryInfo;
  setValues: Dispatch<SetStateAction<DeliveryInfo>>;
};
export const Step1Wrapper = (props: Step1WrapperProps) => {
  const { values, setValues } = props;

  const handleOnchange = (
    event:
      | SelectChangeEvent<string>
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  const isFieldDeliveryInfoValues = Object.values(values).every((item) => item);

  // const handleOnchange = (value: string, field: string) => {
  //   setValues({ ...values, [field]: value });
  // const values = Object.values(data);
  // let isDone = true;
  // values.forEach((value) => {
  //   if (value.length === 0) isDone = false;
  // });
  // };

  const handleDistrictSelect = (value: string) => {
    setValues({ ...values, district: value });
  };
  const handleHorooSelect = (value: string) => {
    setValues({ ...values, horoo: value });
  };
  // const handleApartmentSelect = (value: string) => {
  //   setValues({ ...values });
  // };
  const handlePhoneNumberInput = (e: any) => {
    setValues({ ...values, phoneNumber: e.target.value });
  };

  return (
    <>
      <Step1 isFieldValues={isFieldDeliveryInfoValues} />
      <div
        className="w-[432px] flex flex-col shadow-md rounded-xl
   gap-4 px-1 mb-20 h-[712px] py-6"
      >
        <div className="flex flex-col gap-2 mb-4  px-4  py-2">
          <h1 className="text-sm text-black">Хаяг аа оруулна уу</h1>
          <DistrictSelector
            handleOnchange={handleOnchange}
            district={values?.district}
          />
          <KhorooSelector
            handleOnchange={handleOnchange}
            horoo={values?.horoo}
          />
          <ApartmentSelector values={values} setValues={setValues} />
        </div>

        <div className=" px-4 gap-10   w-[384px]">
          <h1 className="text-sm  text-black">Нэмэлт мэдээлэл</h1>
          <textarea
            value={values.additionalInfo}
            onChange={handleOnchange}
            name="additionalInfo"
            id="message"
            className="block mb-6 p-4 w-[384px] rounded-sm
         text-sm text-black bg-[#F7F7F8] input-bordered h-[112px]"
            placeholder="Орц, давхар, орцны код ..."
          ></textarea>
        </div>
        <div className="px-4  mb-4  w-[384px]">
          <h1 className="text-sm  pb-1 text-black">Утасны дугаар*</h1>

          <input
            className=" p-4 w-[384px] rounded-sm
         text-sm text-black bg-[#F7F7F8] input-bordered h-[48px]"
            type="number"
            name="phoneNumber"
            value={values?.phoneNumber}
            onChange={handleOnchange}
            placeholder="Утасны дугаараа оруулна уу"
            id=""
          />
        </div>
        <div className=" w-[384px] px-4">
          <h1 className="text-sm pb-1 text-black">Төлбөр төлөх </h1>
          <div className="flex gap-8 w-[384px] h-[24px] ">
            <div className="form-control  ">
              <label className="label  gap-2 cursor-pointer">
                <input value={"cash"} type="checkbox" className="checkbox" />
                <span className="label-text pr-10">Бэлнээр</span>
              </label>
            </div>
            <div className="  form-control">
              <label className="label gap-2 cursor-pointer">
                <input
                  onChange={handleOnchange}
                  value={"Card"}
                  name="withCard"
                  type="checkbox"
                  className="checkbox"
                />
                <span className="label-text">Картаар</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
