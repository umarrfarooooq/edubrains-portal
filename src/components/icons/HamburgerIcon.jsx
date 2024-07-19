import React from "react";

const HamburgerIcon = ({ height, width, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "24"} height={height ? height : "24"} className={className}
      viewBox="0 0 21 14"
      fill="none"
    >
      <path
        d="M1.00312 1H20.2031"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.00313 7H20.2031"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14.2031 13H20.2031"
        stroke="#333333"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HamburgerIcon;
