"use client";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import DatePicker from "./DatePicker";
import GuestSelect from "./GuestSelect";
import React from "react";

function SearchBox() {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="w-full max-w-[488px] bg-white max-h-max flex flex-col border border-outline rounded-[20px] p-10"
    >
      <div className="mb-5">
        <Label htmlFor="destination">Gidilecek Yer</Label>
        <div className="relative flex justify-center items-center mb-[20px]">
          <Input id="destination" placeholder="İstanbul"></Input>
          <MapPin className="absolute right-6 text-black" size={24}></MapPin>
        </div>
        <div className="flex flex-col xl:flex-row gap-x-[30px] gap-y-[5px] xl:gap-y-0">
          <div className="flex flex-col flex-1">
            <Label>Giriş Tarihi</Label>
            <DatePicker></DatePicker>
          </div>
          <div className="flex flex-col flex-1">
            <Label>Çıkış Tarihi</Label>
            <DatePicker></DatePicker>
          </div>
        </div>
      </div>
      <div className=" flex flex-col ">
        <div className="flex flex-col flex-1 mb-[24px]">
          <Label>Ziyaretçi Sayısı</Label>
          <GuestSelect></GuestSelect>
        </div>
        <div className=" flex items-center gap-x-3 mb-[24px] ">
          <Checkbox id="terms"></Checkbox>
          <Label className="font-semibold mb-0" htmlFor="terms">
            Seyahat gizlilik politikasını onayla.
          </Label>
        </div>
        <Button size="lg" variant="accent">
          Otel Ara
        </Button>
      </div>
    </motion.div>
  );
}

export default SearchBox;
