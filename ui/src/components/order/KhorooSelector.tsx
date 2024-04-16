import { ChangeEvent, useState } from "react";
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import LocationCity from "@mui/icons-material/LocationCity";
import { TbArrowWaveRightDown } from "react-icons/tb";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { sizing } from "@mui/system";

type KhorooSelectorProps = {
  horoo: string;
  handleOnchange: (event: SelectChangeEvent<string>) => void;
};

export default function KhorooSelector({
  handleOnchange,
  horoo,
}: KhorooSelectorProps) {
  const horoos = [
    { label: "1-р хороо", value: "1horoo" },
    { label: "2-р хороо", value: "2horoo" },
    { label: "3-р хороо", value: "3horoo" },
    { label: "4-р хороо", value: "4horoo" },
    { label: "5-р хороо", value: "5horoo" },
    { label: "6-р хороо", value: "6horoo" },
    { label: "7-р хороо", value: "7horoo" },
    { label: "8-р хороо", value: "8horoo" },
    { label: "9-р хороо", value: "9horoo" },
    { label: "10-р хороо", value: "10horoo" },
  ];
  return (
    <FormControl
      sx={{
        border: "0",
        height: "75%",
        width: "384px",
        gap: "4px",
        bgcolor: horoo.length === 0 ? "white" : "#18BA51",
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
        <>Хороо сонгоно уу</>
      </InputLabel>
      <Select
        placeholder=""
        IconComponent={ExpandMoreIcon}
        labelId="Дүүрэг сонгоно уу"
        id="demo-simple-select"
        value={horoo}
        name="horoo"
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
          <span>Хороо сонгоно уу</span>
        </MenuItem>
        {horoos.map((horoos, index) => (
          <MenuItem
            key={index}
            value={horoos.value}
            sx={{
              height: "48px",
              gap: "4px",
            }}
          >
            <PlaceOutlinedIcon />
            <span>{horoos.label}</span>
          </MenuItem>
        ))}
        {/* <MenuItem
          sx={{
            height: "48px",
            gap: "4px",
          }}
          value={"2horoo"}
        >
          <PlaceOutlinedIcon />
          <span>2-р хороо</span>
        </MenuItem>
        <MenuItem
          sx={{
            height: "48px",
            gap: "4px",
          }}
          value={"3horoo"}
        >
          <PlaceOutlinedIcon />
          <span>3-р хороо</span>
        </MenuItem>
        <MenuItem
          sx={{
            height: "48px",
            gap: "4px",
          }}
          value={"4horoo"}
        >
          <PlaceOutlinedIcon />
          <span>4-р хороо</span>
        </MenuItem>
        <MenuItem
          sx={{
            height: "48px",
            gap: "4px",
          }}
          value={30}
        >
          <PlaceOutlinedIcon />
          <span>5-р хороо</span>
        </MenuItem>
        <MenuItem
          sx={{
            height: "48px",
            gap: "4px",
          }}
          value={30}
        >
          <PlaceOutlinedIcon />
          <span>6-р хороо</span>
        </MenuItem>
        <MenuItem
          sx={{
            height: "48px",
            gap: "4px",
          }}
          value={30}
        >
          <PlaceOutlinedIcon />
          <span>7-р хороо</span>
        </MenuItem> */}
      </Select>
    </FormControl>
  );
}
