"use client";
import React, { useState, useEffect } from "react";
import MonacoEditor from "../components/Editor";
import Tabsbar from "../components/Tabsbar";
import Explorer from "../components/Explorer";
import Xterm from "../components/Xterm";
import Titlebar from "../components/Titlebar";
import Sidebar from "../components/Sidebar";
import Bottombar from "../components/Bottombar";
import axios from "axios";

const HomePage = () => {
  const [tabs, setTabs] = useState<any[]>([]);
  const [activeFilePath, setActiveFilePath] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);
  useEffect(() => {
    if (activeFilePath) {
      fetchFileContent(activeFilePath);
    }
  }, [activeFilePath]);

  const fetchFileContent = async (filePath: string) => {
    try {
      const response = await axios.get(
        `http://localhost:9000/files/${encodeURIComponent(filePath)}`
      );
      setFileContent(response.data);
    } catch (error) {
      console.error("Error fetching file content:", error);
    }
  };

  const handleFileSelect = (filePath: string) => {
    if (!tabs.find((tab) => tab.path === filePath)) {
      setTabs((prevTabs) => [
        ...prevTabs,
        { path: filePath, name: filePath.split("/").pop() },
      ]);
    }
    setActiveFilePath(filePath);
  };

  const handleTabClick = (filePath: string) => {
    setActiveFilePath(filePath);
  };

  const handleTabClose = (filePath: string) => {
    setTabs((prevTabs) => prevTabs.filter((tab) => tab.path !== filePath));
    if (filePath === activeFilePath) {
      setActiveFilePath(tabs.length > 1 ? tabs[0].path : "");
    }
  };

  const handleSave = async () => {
    if (activeFilePath && fileContent) {
      try {
        await axios.post(
          `http://localhost:9000/files/${encodeURIComponent(activeFilePath)}`,
          {
            content: fileContent,
          }
        );
        console.log("File saved successfully!");
      } catch (error) {
        console.error("Error saving file:", error);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        handleSave();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [fileContent, activeFilePath]);

  return (
    <div className="flex w-screen h-screen flex-col ">
      <div className="flex w-full h-full flex-row">
        <div className="flex ">
          <Sidebar />
        </div>
        <div className="flex  w-full h-full flex-row">
          <div className="flex  h-full">
            {isExplorerOpen &&
            <Explorer onFileSelect={handleFileSelect} /> }
          </div>
          <div className="flex w-full h-full flex-col">
            <div className="flex w-full ">
            <Tabsbar
          tabs={tabs}
          activeTab={activeFilePath}
          onTabClick={handleTabClick}
          onTabClose={handleTabClose}
        />
            </div>
                <span className="text-white ml-2 text-[15px] pb-1">User > {activeFilePath.split('/').join(' > ')}</span>
          
              <div className="flex w-[calc(100%-2vw)] h-[calc(100%-0.2vw)]  ">
              <MonacoEditor
            value={fileContent}
            language="javascript"
            onChange={(newValue: any) => setFileContent(newValue)}
          />
               
              </div>
              {isTerminalOpen &&
                <Xterm  />}
      
          </div> 
        </div>
      </div>
      <div className="flex">
        <Bottombar />
      </div>
    </div>

  );
};

export default HomePage;


