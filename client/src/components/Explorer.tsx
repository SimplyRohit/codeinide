// Explorer.tsx
"use client";
import { useState, useEffect } from "react";
import { ChevronRight, Folder, FileText } from "lucide-react";
import axios from "axios";
import socket from "../../socket";

const Explorer = ({ onFileSelect }: any) => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const [fileTree, setFileTree] = useState({});
  const [openDirectories, setOpenDirectories] = useState(new Map());

  useEffect(() => {
    socket.on("file-change", fetchFileTree);
    return () => {
      socket.off("file-change", fetchFileTree);
    };
  }, []);

  useEffect(() => {
    fetchFileTree();
  }, []);

  const fetchFileTree = async () => {
    try {
      const response = await axios.get("http://localhost:9000/files");
      setFileTree(response.data);
    } catch (error) {
      console.error("Error fetching file tree:", error);
    }
  };

  const toggleDirectory = (path: any) => {
    setOpenDirectories((prev) => {
      const newMap = new Map(prev);
      const currentState = newMap.get(path) || false;
      newMap.set(path, !currentState);
      return newMap;
    });
  };

  const handleFileClick = (path: string) => {
    onFileSelect(path);
  };

  const renderTree = (node: any, path = "") => {
    return (
      <div key={path}>
        {Object.entries(node).map(([key, value]) => {
          const isDirectory =
            value && typeof value === "object" && !Array.isArray(value);
          const isOpen = openDirectories.get(path + key) || false;

          return (
            <div
              key={path + key}
              style={{ marginLeft: isDirectory ? "20px" : "0" }}
            >
              <div
                className="flex items-center cursor-pointer"
                onClick={() =>
                  isDirectory
                    ? toggleDirectory(path + key)
                    : handleFileClick(path + key)
                }
              >
                {isDirectory ? (
                  <Folder
                    className={`mr-2 w-4  transition-transform duration-200 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                ) : (
                  <FileText className="mr-2 w-3" />
                )}
                {key}
                {(isDirectory as any) && (
                  <ChevronRight
                    className={`transition-transform duration-200 w-3 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                    style={{ marginLeft: "auto" }}
                  />
                )}
              </div>
              {isDirectory && isOpen && renderTree(value, path + key + "/")}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-[#181818] w-[10vw] text-[#e1e4e8] font-['Source Sans Pro'] border-x-[1px] border-[#2B2B2B]">
      <p className="p-2 font-light uppercase text-[0.9rem] tracking-widest mb-3">
        Explorer
      </p>
      <div>
        <input
          type="checkbox"
          className="absolute opacity-0 -z-1"
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label
          htmlFor="portfolio-checkbox"
          className="uppercase font-bold text-[0.8rem] tracking-widest flex items-center cursor-pointer px-2"
        >
          <ChevronRight
            className="transition-transform duration-200"
            style={portfolioOpen ? { transform: "rotate(90deg)" } : {}}
          />
          User
        </label>
        <div className={`px-2 py-1 ${portfolioOpen ? "block" : "hidden"}`}>
          {renderTree(fileTree)}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
