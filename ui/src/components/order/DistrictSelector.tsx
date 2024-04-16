"use client";

import { TbArcheryArrow } from "react-icons/tb";
import React, { ChangeEvent, useEffect } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { useState } from "react";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  colors,
  SelectChangeEvent,
} from "@mui/material";
import LocationCity from "@mui/icons-material/LocationCity";
import { TbArrowWaveRightDown } from "react-icons/tb";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { sizing } from "@mui/system";

type DistrictSelectorProps = {
  district: string;
  handleOnchange: (event: SelectChangeEvent<string>) => void;
};

export default function DistrictSelector({
  handleOnchange,
  district,
}: DistrictSelectorProps) {
  const options = [
    { label: "Баянзүрх дүүрэг", value: "BZD" },
    { label: "Хан-Уул дүүрэг", value: "HUD" },
    { label: "Баянгол дүүрэг", value: "BGD" },
    { label: "Сонгинохайрхан дүүрэг", value: "SHD" },
    { label: "Чингэлтэй дүүрэг", value: "CHD" },
  ];

  return (
    <FormControl
      sx={{
        border: "0",
        height: "75%",
        width: "384px",
        gap: "4px",
        bgcolor: district.length === 0 ? "white" : "#18BA51",
      }}

      // fullWidth
    >
      <InputLabel
        sx={{
          height: "48px",
          gap: "4px",
        }}
        id="Дүүрэг сонгоно уу"
      >
        <PlaceOutlinedIcon />
        <>Дүүрэг сонгоно уу</>
      </InputLabel>
      <Select
        placeholder="Дүүрэг сонгоно уу"
        IconComponent={ExpandMoreIcon}
        labelId="Дүүрэг сонгоно уу"
        id="demo-simple-select"
        value={district}
        name="district"
        style={{ height: 48 }}
        label="Дүүрэг сонгоно уу ?"
        onChange={handleOnchange}
      >
        <MenuItem
          value={0}
          selected
          disabled
          sx={{
            bgcolor: "#18BA51",
            height: "48px",
            gap: "4px",
          }}
        >
          <PlaceOutlinedIcon />
          <span>Дүүрэг сонгоно уу</span>
        </MenuItem>
        {options.map((option, index) => (
          <MenuItem
            key={`district-item-${index}`}
            value={option.value}
            // selected
            // disabled
            sx={{
              // bgcolor: "#18BA51",
              height: "48px",
              gap: "4px",
            }}
          >
            <PlaceOutlinedIcon />
            <span>{option.label}</span>
          </MenuItem>
        ))}
        {/* <MenuItem
          value={"BZD"}
          sx={{
            height: "48px",
            gap: "4px",
          }}
        >
          <PlaceOutlinedIcon />
          <span>Баянзүрх дүүрэг</span>
        </MenuItem>
        <MenuItem
          sx={{
            height: "48px",
            gap: "4px",
          }}
          value={"HUD"}
        >
          <PlaceOutlinedIcon />
          <span>Хан-Уул дүүрэг</span>
        </MenuItem>
        <MenuItem
          sx={{
            height: "48px",
            gap: "4px",
          }}
          value={"BGD"}
        >
          <PlaceOutlinedIcon />
          <span>Баянгол дүүрэг</span>
        </MenuItem>
        <MenuItem
          sx={{
            height: "48px",
            gap: "4px",
          }}
          value={"SHD"}
        >
          <PlaceOutlinedIcon />
          <span>Сонгинохайрхан дүүрэг</span>
        </MenuItem>
        <MenuItem
          sx={{
            height: "48px",
            gap: "4px",
          }}
          value={"CHD"}
        >
          <PlaceOutlinedIcon />
          <span>Чингэлтэй дүүрэг</span>
        </MenuItem> */}
      </Select>
    </FormControl>
  );
}
