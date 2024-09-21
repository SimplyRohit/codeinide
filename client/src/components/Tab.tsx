// Tab.tsx
"use client";
import { X } from "lucide-react";

const Tab = ({ tab, isActive, onClick, onClose }: any) => {
  return (
    <div
      className={`flex justify-center  cursor-pointer items-center w-[5rem] ${
        isActive ? "bg-[#1F1F1F]" : "bg-[#181818]"
      }  text-gray-300`}
      onClick={onClick}
    >
      <h1 className="font-bold text-[0.8rem] px-1 ">{tab.name}</h1>
      <X onClick={onClose} className="w-3 h-3 " />
    </div>
  );
};

export default Tab;
