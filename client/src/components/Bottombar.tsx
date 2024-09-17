"use client";
import {
  AlertCircle,
  AlertTriangle,
  Bell,
  Check,
  GitBranch,
} from "lucide-react";

const Bottombar = () => {
  return (
    <footer className="bg-bottombar-bg h-6 border-t border-bottombar-border text-gray-200 px-2 flex items-center justify-between text-xs">
      <div className="flex items-center">
        <a
          href="https://github.com/itsnitinr/vscode-portfolio"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center text-white hover:bg-bottombar-hover-bg px-1 py-0.5 rounded"
        >
          <GitBranch className="mr-1 h-4 w-4" />
          <p>main</p>
        </a>
        <div className="flex items-center ml-2">
          <AlertCircle className="h-4 w-4 text-red-400 mr-1" />
          <p className="mr-2">0</p>
          <AlertTriangle className="h-4 w-4 text-yellow-400 mr-1" />
          <p>0</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-2">
          <p>Powered by Next.js</p>
        </div>
        <div className="flex items-center mr-2">
          <Check className="h-4 w-4 mr-1" />
          <p>Prettier</p>
        </div>
        <div className="flex items-center">
          <Bell className="h-4 w-4" />
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;
