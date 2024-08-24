"use client";
import React from "react";
import BackIcon from "../icons/BackIcon";
import { useRouter } from "next/navigation";

const NavigateBack = ({ prevPage, actions, actionBtn1, actionBtn2 }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="p-6 rounded-xl border border-[#F4F1EB] bg-[#FFFDFA] flex items-center justify-between gap-5">
      <div className="flex items-center gap-5">
        <div className="cursor-pointer" onClick={handleBack}>
          <BackIcon />
        </div>
        <div className="text-lg font-semibold">{prevPage}</div>
      </div>
      {actions && <div className="flex items-center gap-4">
      {actionBtn1 && actionBtn1}
      {actionBtn2 && actionBtn2}
      
      </div>}
      
    </div>
  );
};

export default NavigateBack;
