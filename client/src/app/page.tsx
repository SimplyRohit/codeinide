// pages/index.js
"use client";
import React, { useState } from "react";
import MonacoEditor from "../components/Editor";
import Tabsbar from "@/components/Tabsbar";
const HomePage = () => {
  const [code, setCode] = useState(
    '// Your code here\nconsole.log("Hello, Monaco!");'
  );

  const handleCodeChange = (newValue) => {
    setCode(newValue);
  };

  return (
    <div className="flex flex-col w-full h-[calc(100vh-255px)]">
      <Tabsbar />
      <MonacoEditor
        value={code}
        language="javascript"
        onChange={handleCodeChange}
      />
    </div>
  );
};

export default HomePage;
