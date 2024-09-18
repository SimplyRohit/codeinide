"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ChevronRight from "../icons/ChevronRight";

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className="bg-[var(--explorer-bg)] w-[18vw] text-[#e1e4e8] font-['Source Sans Pro'] border-r-[1px] border-[var(--explorer-border)]">
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
        <div
          className={`px-2 py-1 cursor-pointer ${
            portfolioOpen ? "block" : "hidden"
          }`}
        >
          {/* {explorerItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className="px-4 py-1 flex items-center text-[0.875rem] hover:bg-[var(--explorer-hover-bg)]">
                <Image
                  src={`${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                />
                <p className="ml-1">{item.name}</p>
              </div>
            </Link>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
