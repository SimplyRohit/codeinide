// pages/index.js
"use client";
import React, { useState } from "react";
import MonacoEditor from "../components/Editor";
import Tabsbar from "@/components/Tabsbar";
import Explorer from "@/components/Explorer";
import Xterm from "@/components/Xterm";
const HomePage = () => {
  const [code, setCode] = useState(
    '// Your code here\nconsole.log("Hello, Monaco!");'
  );

  const handleCodeChange = (newValue: any) => {
    setCode(newValue);
  };

  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex ">
        <Explorer />
      </div>
      <div className="flex flex-col w-full h-[calc(100vh-255px)]">
        <Tabsbar />
        <MonacoEditor
          value={code}
          language="javascript"
          onChange={handleCodeChange}
        />
        <Xterm />
      </div>
    </div>
  );
};

export default HomePage;
