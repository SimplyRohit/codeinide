"use client";
import Tab from "./Tab";

const Tabsbar = ({ tabs, activeTab, onTabClick, onTabClose }: any) => {
  return (
    <div className="flex h-[2rem] w-full min-h-[2rem] border-[#2B2B2B] border-b-2 bg-[#181818]">
      {tabs.map((tab: any) => (
        <Tab
          key={tab.path}
          tab={tab}
          isActive={tab.path === activeTab}
          onClick={() => onTabClick(tab.path)}
          onClose={() => onTabClose(tab.path)}
        />
      ))}
    </div>
  );
};

export default Tabsbar;
