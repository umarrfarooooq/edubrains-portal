import React from "react";
import Wellcome from "@/components/Wellcome/Wellcome";
import FilterIcon from "@/components/icons/FilterIcon";
import FinanceCard from "./Finance-Card";
import { Wallet } from "lucide-react";
import FinanceTable from "./Finance-Table";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import BackIcon from "@/components/icons/BackIcon";
import FinancePeriod from "./Finance-Period";
import FinanceReportTable from "./Finance-Report";

const FinanceMain = () => {
  return (
    <div className="w-full bg-[#FFF9EF] min-h-screen p-6 flex flex-col gap-4">
      <Wellcome
        name="Financial Management"
        search={true}
        shortcutAction2={<FilterIcon />}
        counts="0"
        actionBtn="Add Record"
        btnRedirect="/finance/add-finance"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <FinanceCard
          icon={<Wallet />}
          title="Total Revenue"
          counting="$14,229"
        />
        <FinanceCard
          icon={<Wallet />}
          title="Total Revenue"
          counting="$14,229"
        />
        <FinanceCard
          icon={<Wallet />}
          title="Total Revenue"
          counting="$14,229"
        />
        <FinanceCard
          icon={<Wallet />}
          title="Total Revenue"
          counting="$14,229"
        />
      </div>
      <div className="flex flex-col gap-4 bg-[#FFFDFA] border border-[#F4F1EB] rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">
            Financial Records List <span>1200</span>
          </div>
          <div className="underline flex items-center gap-2">
            <span>Generate Report</span> <RightArrowIcon width={16} height={16}/>
          </div>
        </div>
        <FinanceTable />
      </div>
      <div className="flex flex-col gap-4 bg-[#FFFDFA] border border-[#F4F1EB] rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">
              <div className="flex items-center gap-5">
                <div className="cursor-pointer">
                  <BackIcon />
                </div>
                <div className="text-lg font-semibold">Generate Report</div>
              </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="text-sm font-semibold">Report Type</span>{" "}
            <FinancePeriod />
          </div>
        </div>
        <FinanceReportTable />
        
      </div>
    </div>
  );
};

export default FinanceMain;
