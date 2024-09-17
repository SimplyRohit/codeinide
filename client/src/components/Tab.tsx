"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, FileJson } from "lucide-react";

const icons = {
  js: <FileText size={18} />,
  json: <FileJson size={18} />,
};

const Tab = ({ icon, filename, path }) => {
  const pathname = usePathname();
  const iconComponent = icons[icon];

  return (
    <Link
      href={path}
      className={`flex items-center px-4 py-2 border border-gray-700 ${
        pathname === path
          ? "bg-gray-800 border-t-2 border-accent"
          : "bg-gray-700"
      } text-gray-200 hover:bg-gray-600`}
    >
      {iconComponent}
      <p className="ml-2 text-sm">{filename}</p>
    </Link>
  );
};

export default Tab;
