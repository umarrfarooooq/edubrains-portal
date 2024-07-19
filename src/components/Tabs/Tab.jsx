import React from "react";

const Tab = ({ tab, activeTab, setActiveTab }) => {
  const handleTabClick = () => {
    setActiveTab(tab);
  };

  return (
    <div
      onClick={handleTabClick}
      className={`${
        activeTab === tab ? "bg-[#FFFDFA]" : ""
      } transition-all rounded-lg md:px-3 p-3 w-full flex items-center justify-center cursor-pointer`}
    >
      <span className="text-sm md:text-base">{tab}</span>
    </div>
  );
};

export default Tab;