"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Tab = ({ icon, filename, path }) => {
  const pathname = usePathname();
  return (
    <Link href={path}>
      <div
        className={`flex items-center cursor-pointer p-2.5 bg-gray-800 border border-gray-700 text-gray-300 font-sans text-sm ${
          pathname === path
            ? "border-t border-t-blue-500 bg-gray-700"
            : "border-b"
        }`}
      >
        <Image src={icon} alt={filename} height={18} width={18} />
        <p className="ml-1">{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
