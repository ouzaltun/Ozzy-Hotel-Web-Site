"use client";
import { useState } from "react";
import format from "date-fns/format";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import classNames from "classnames";
function DatePicker() {
  const [date, setDate] = useState(null);
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"default"}
            className={classNames(
              " w-full justify-between items-center text-left font-medium",

              {
                "text-black": !date,
              }
            )}
          >
            {date ? format(date, "d MMM") : <span>Tarih seçiniz!</span>}
            <CalendarIcon className="mr-2 h-5 w-5 text-black"></CalendarIcon>
          </Button>
        </PopoverTrigger>
      </Popover>
    </div>
  );
}

export default DatePicker;
