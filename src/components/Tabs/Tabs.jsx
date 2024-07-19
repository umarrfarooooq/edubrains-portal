import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab, initializeActiveTab } from "../store/tabSlice";
import Tab from "./Tab";

const Tabs = ({ tabs, defaultTab }) => {
  const activeTab = useSelector((state) => state.tabs.activeTab);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeActiveTab(defaultTab));
  }, [defaultTab, dispatch]);

  const handleSetActiveTab = (tab) => {
    dispatch(setActiveTab(tab));
  };
  return (
    <div className="bg-[#F4F1EB] my-1 rounded-xl px-1 py-1 w-full gap-2 flex items-center justify-between">
      {tabs.map((tab) => (
        <Tab
          key={tab}
          tab={tab}
          activeTab={activeTab}
          setActiveTab={handleSetActiveTab}
        />
      ))}
    </div>
  );
};

export default Tabs;
