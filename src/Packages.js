import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiSilverBullet } from "react-icons/gi";
import { TbSolarElectricity } from "react-icons/tb";
import { AiOutlineGold } from "react-icons/ai";

const packages = [
  {
    title: "320w Small ",
    price: "Ksh 130,000",
    icon: HiOutlineLightBulb,
    details: [
      "4 x 460 Watts solar panels",
      "3kW high efficient hybrid inverter",
      "9600whs battery back up",
      "Runs, tv, fridge, microwave, iron box etc",
      "Off grid but grid can be used as a back up"
    ]
  },
  {
    title: "1KVA Medium ",
    price: "Ksh 180,000",
    icon: GiSilverBullet,
    details: [
      "6 x 160 Watts solar panels",
      "1kW high hybrid inverter",
      "4800whs battery back up",
      "Runs, tv, fridge, music system, phone charging",
      "Can use the grid as a back up"
    ]
  },
  {
    title: "3 KVA Standard ",
    price: "Ksh 340,000",
    icon: TbSolarElectricity,
    details: [
      "4 x 460 Watts solar panels",
      "3kW high efficient hybrid inverter",
      "9600whs battery back up",
      "Runs, tv, fridge, microwave etc",
      "Off grid but grid can be used as a back up"
    ]
  },
  {
    title: "4 KVA Large ",
    price: "Ksh 440,000",
    icon: AiOutlineGold,
    details: [
      "8 x 460 Watts solar panels",
      "5kW high efficient hybrid inverter",
      "9600whs battery back up",
      "Runs, tv, fridge, washing machine, microwave, iron box etc",
      "Off grid but grid can be used as a back up"
    ]
  }
];

export default packages;
