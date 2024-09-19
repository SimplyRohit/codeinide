"use client";
import Tab from "./Tab";

const Tabsbar = ({ tabs, activeTab, onTabClick, onTabClose }: any) => {
  return (
    <div className="flex min-h-[2.5rem] bg-[#1F2428]">
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
