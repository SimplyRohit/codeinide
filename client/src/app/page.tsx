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
import { Allotment } from "allotment";
import "allotment/dist/style.css";

const HomePage = () => {
  const [tabs, setTabs] = useState([]);
  const [activeFilePath, setActiveFilePath] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);
  const [isXtermOpen, setIsXtermOpen] = useState(true);
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
    const handleKeyDown = (event) => {
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
    <div className="flex w-screen h-screen overflow-hidden flex-col ">
      <Titlebar />
      <div className="flex w-full h-full flex-row">
        <div className="flex ">
          <Sidebar
            isExplorerOpen={isExplorerOpen}
            setIsExplorerOpen={setIsExplorerOpen}
            isXtermOpen={isXtermOpen}
            setIsXtermOpen={setIsXtermOpen}
          />
        </div>
        <div className="flex  w-full h-full flex-row">
          <Allotment>
            {isExplorerOpen && (
              <Allotment.Pane className="flex   h-full " preferredSize="20%">
                <Explorer onFileSelect={handleFileSelect} />
              </Allotment.Pane>
            )}
            <div className="flex w-full h-full flex-col">
              <div className="flex w-full ">
                <Tabsbar
                  tabs={tabs}
                  activeTab={activeFilePath}
                  onTabClick={handleTabClick}
                  onTabClose={handleTabClose}
                />
              </div>
              {activeFilePath && (
                <span className="text-white ml-2 text-[15px] pb-1">
                  User {">"} {activeFilePath.split("/").join(" > ")}
                </span>
              )}
              <Allotment vertical>
                <div className="flex h-full">
                  <MonacoEditor
                    value={fileContent}
                    language="javascript"
                    onChange={(newValue) => setFileContent(newValue)}
                  />
                </div>
                {isXtermOpen && (
                  <Allotment.Pane className="flex h-full" preferredSize="20%">
                    <Xterm />
                  </Allotment.Pane>
                )}
              </Allotment>
            </div>
          </Allotment>
        </div>
      </div>
      <div className="flex">
        <Bottombar />
      </div>
    </div>
  );
};

export default HomePage;
