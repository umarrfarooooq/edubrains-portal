import React from "react";
import { Eye } from "lucide-react";
import FinancePeriod from "./Finance-Period";

const FinanceCard = ({ icon, title, counting, period }) => {
  return (
    <div>
      <div className="p-4 rounded-xl border border-[#F4F1EB] bg-[#FFFDFA]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-lg bg-[#F4F1EB] flex items-center justify-center">
              {icon}
            </div>
            <div>
                <FinancePeriod />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-[0.6875rem] text-[#696969]">{title}</div>
            <div className="text-lg text-[#151515] font-semibold flex items-center justify-between">
              <div>{counting}</div>
              <div className="cursor-pointer">
                <Eye />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceCard;
