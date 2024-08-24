import Link from "next/link";
import React from "react";

const ActionTxtAndIconBtn = ({
  actionBtnIcon,
  actionBtnTxt,
  bgColor,
  txtColor,
  redirect,
}) => {
  return (
    <Link href={redirect ? redirect : ""}>
      <div
        className={`${
          bgColor ? bgColor : "bg-[#d944443d]"
        } py-3 px-6 rounded-lg ${
          txtColor ? txtColor : "text-[#DC3545]"
        } flex items-center gap-2 font-semibold`}
      >
        <span>{actionBtnIcon && actionBtnIcon}</span>
        <span>{actionBtnTxt && actionBtnTxt}</span>
      </div>
    </Link>
  );
};
const ActionIconBtn = ({ actionBtnIcon, bgColor, redirect }) => {
  return (
    <Link href={redirect ? redirect : ""}>
      <div
        className={`${
          bgColor ? bgColor : "bg-[#F4F1EB]"
        } w-12 h-12 rounded-full flex items-center justify-center  gap-2 font-semibold cursor-pointer`}
      >
        <span>{actionBtnIcon && actionBtnIcon}</span>
      </div>
    </Link>
  );
};

export { ActionTxtAndIconBtn, ActionIconBtn };
