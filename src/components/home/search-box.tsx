"use client";

import * as React from "react";
import { format } from "date-fns";
import { Search } from "lucide-react";
import Image from "next/image";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function SearchBox() {
  const [destination, setDestination] = React.useState("");
  const [date, setDate] = React.useState<DateRange | undefined>();

  const handleSearch = () => {
    // Implement search logic here
    console.log("Searching for:", destination, date);
  };

  return (
    <div className="w-full max-w-4xl mt-12 bg-white p-2 md:p-3 rounded-[16px] shadow-lg flex flex-col md:flex-row items-center gap-2 md:gap-3 relative z-10">
      {/* Destination Input */}
      <div className="flex-1 flex items-center w-full px-4 py-3 bg-[#F1F5F9] border border-[#CBD5E1] rounded-xl focus-within:ring-2 focus-within:ring-[#005CBD]/50 focus-within:border-[#005CBD]">
        <Image src="/main-vectors/world.svg" alt="Destination" width={24} height={24} className="flex-shrink-0" />
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Where to next?"
          className="w-full bg-transparent border-none outline-none px-3 text-gray-800 placeholder-gray-500 font-medium text-base"
        />
      </div>

      {/* Dates Input */}
      <Popover>
        <PopoverTrigger asChild>
          <div className="flex-1 flex items-center w-full px-4 py-3 bg-[#F1F5F9] border border-[#CBD5E1] rounded-xl hover:border-[#005CBD]/50 transition-colors cursor-pointer focus-within:ring-2 focus-within:ring-[#005CBD]/50 focus-within:border-[#005CBD]">
            <Image src="/main-vectors/calendar-search.svg" alt="Dates" width={24} height={24} className="flex-shrink-0" />
            <div className={cn(
              "w-full bg-transparent border-none outline-none px-3 text-left font-medium text-base select-none",
              !date && "text-gray-500",
              date && "text-gray-800"
            )}>
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd")} - {format(date.to, "LLL dd")}
                  </>
                ) : (
                  format(date.from, "LLL dd")
                )
              ) : (
                <span>Pick your dates</span>
              )}
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 rounded-2xl border border-gray-100 shadow-2xl" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            className="rounded-2xl"
          />
        </PopoverContent>
      </Popover>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="w-full md:w-auto bg-[#005CBD] hover:bg-[#004a99] text-white font-semibold py-3 px-8 rounded-xl flex items-center justify-center gap-2 transition-colors"
      >
        <Search className="w-5 h-5 text-white" />
        Search
      </button>
    </div>
  );
}
