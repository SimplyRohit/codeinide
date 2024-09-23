// Explorer.tsx
"use client";
import { useState, useEffect } from "react";
import { ChevronRight, FolderOpen, FolderClosed, File } from "lucide-react";
import axios from "axios";
import socket from "../../socket";

const Explorer = ({ onFileSelect }) => {
  const [userOpen, setUserOpen] = useState(true);
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

  const toggleDirectory = (path) => {
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

  const renderTree = (node, path = "") => {
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
                  isOpen ? (
                    <FolderOpen
                      className={`mr-2 w-4  transition-transform duration-200 `}
                    />
                  ) : (
                    <FolderClosed
                      className={`mr-2 w-4  transition-transform duration-200 `}
                    />
                  )
                ) : (
                  <File className="mr-2 w-4" />
                )}
                {key}
                {isDirectory && (
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
    <div className="bg-[#181818] w-full text-[#e1e4e8] font-['Source Sans Pro'] border-x-[1px] border-[#2B2B2B]">
      <p className="p-2 font-light uppercase text-[0.9rem] tracking-widest mb-3">
        Explorer
      </p>
      <div>
        <div className="flex items-center   flex-row">
          <h1
            className="uppercase font-bold text-[0.8rem] tracking-widest flex items-center cursor-pointer px-2"
            onClick={() => setUserOpen(!userOpen)}
          >
            <ChevronRight
              className={`transition-transform duration-200 ${
                userOpen ? "rotate-90" : ""
              }`}
            />
            User
          </h1>
          {/* <div className="flex  items-center justify-end mr-2 w-full gap-2">
            <FilePlus2 className="w-4 " />
            <FolderPlus className="w-4 " />
            <FolderSync className="w-4 " />
          </div> */}
        </div>
        <div className={`px-2 py-1 ${userOpen ? "block" : "hidden"}`}>
          {renderTree(fileTree)}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
