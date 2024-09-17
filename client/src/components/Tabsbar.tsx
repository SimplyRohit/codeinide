"use client";
import { FileText, FileJson } from "lucide-react";
import Tab from "./Tab";

const Tabsbar = () => {
  return (
    <div className="flex bg-tabs-bg overflow-x-auto">
      <Tab icon={<FileJson />} filename="articles.json" path="/articles" />
    </div>
  );
};

export default Tabsbar;
