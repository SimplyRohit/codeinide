"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, File, FileText, FileCode, FileJson } from "lucide-react";

const explorerItems = [
  {
    name: "home.jsx",
    path: "/",
    icon: FileCode, // React icon equivalent
  },

  {
    name: "contact.css",
    path: "/contact",
    icon: File, // CSS icon (generic file icon for CSS)
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: FileCode, // JavaScript icon equivalent
  },
  {
    name: "articles.json",
    path: "/articles",
    icon: FileJson, // JSON icon
  },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className="bg-explorer-bg w-[18vw] text-gray-200 font-sans border-r border-explorer-border">
      <p className="p-2 font-light uppercase text-xs tracking-wider mb-3">
        Explorer
      </p>
      <div>
        <input
          type="checkbox"
          className="absolute opacity-0 z-[-1]"
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label
          htmlFor="portfolio-checkbox"
          className="text-xs font-bold uppercase flex items-center cursor-pointer px-2"
        >
          <ChevronRight
            className={`transition-transform duration-200 ${
              portfolioOpen ? "rotate-90" : ""
            }`}
          />
          Portfolio
        </label>
        <div className={`py-2 ${portfolioOpen ? "block" : "hidden"}`}>
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <h1 className="flex items-center p-1 text-sm hover:bg-explorer-hover-bg">
                <item.icon className="h-4 w-4" />
                <p className="ml-2">{item.name}</p>
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
