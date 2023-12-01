"use client;";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import DatePicker from "./DatePicker";

function SearchBox() {
  return (
    <div className="bg-pink">
      <div>
        <Label htmlFor="destination">Nereye Gidiyorsunuz?</Label>
        <div className="relative flex justify-center items-center mb-[20px]">
          <Input id="destination" placeholder="İstanbul"></Input>
          <MapPin className="absolute right-6 text-black" size={24}></MapPin>
        </div>
        <div>
          <div>
            <Label>Check in</Label>
            <DatePicker></DatePicker>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
