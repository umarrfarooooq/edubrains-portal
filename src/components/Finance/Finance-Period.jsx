import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FinancePeriod = () => {
  return (
    <Select defaultValue="Weekly" className="px-2 py-1">
      <SelectTrigger className="w-[5rem] h-6 text-xs">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Weekly">Weekly</SelectItem>
          <SelectItem value="Monthly">Monthly</SelectItem>
          <SelectItem value="Yearly">Yearly</SelectItem>
          <SelectItem value="All">All</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FinancePeriod;
