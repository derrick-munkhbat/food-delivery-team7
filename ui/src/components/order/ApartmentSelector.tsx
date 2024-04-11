"use client";

import { useEffect, useState } from "react";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  TextField,
  Autocomplete,
} from "@mui/material";
import LocationCity from "@mui/icons-material/LocationCity";
import { TbArrowWaveRightDown } from "react-icons/tb";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { sizing } from "@mui/system";
import { Span } from "next/dist/trace";

type AddressType = {
  bairname: string;
  bairnote: string;
  city: string;
  district: string;
  full_address: string;
  geopoint: string;
  horoo: string;
  id: string;
  lat: string;
  latitude: string;
  podcode: string;
};

export default function ApartmentSelector() {
  const [address, setAddress] = useState("");

  const [suggestedAddress, setSuggestedAddresses] = useState([]);

  useEffect(() => {
    const getAddressByApartment = async () => {
      const res = await fetch(
        `https://z4ryw4kny0.execute-api.ap-southeast-1.amazonaws.com/production/searchByAddress?address=${address}`
      );

      const data = await res.json();

      console.log(data);
      setSuggestedAddresses(data?.data);
    };
    getAddressByApartment();
  }, [address]);
  console.log(suggestedAddress);
  // console.log(
  //   suggestedAddress,
  //   "suggestedAddresssuggestedAddresssuggestedAddresssuggestedAddress"
  // );

  return (
    <>
      <Autocomplete
        disablePortal
        id="Дүүрэг сонгоно уу"
        onInputChange={(_e, value) => {
          setAddress(value);
        }}
        options={
          address && suggestedAddress
            ? suggestedAddress.map((address: AddressType) => address.bairname)
            : []
        }
        sx={{ width: 384 }}
        renderInput={(params) => (
          <TextField {...params} label="Байр гудамж сонгоно уу" />
        )}
      />
      {/* <TextField
        value={address}
        className="bg-white"
        onChange={(e) => setAddress(e.target.value)}
      /> */}
      {/* 
      <Select
        placeholder=""
        IconComponent={ExpandMoreIcon}
        labelId="Дүүрэг сонгоно уу"
        id="demo-simple-select"
        style={{ height: 48 }}
        value={address}
        label="Дүүрэг сонгоно уу as?????"
        // onChange={handleChange}
      > */}

      {/* {suggestedAddress?.map((el: any, index) => {
        return (
          <MenuItem
            key={index}
            value={el.bairname}
            selected
            sx={{
              bgcolor: "#18BA51",
              height: "48px",
              gap: "4px",
            }}
          >
            <PlaceOutlinedIcon />
            <span>{el.bairname} </span>
          </MenuItem>
        );
      })} */}
      {/* </Select> */}
    </>
  );
}
