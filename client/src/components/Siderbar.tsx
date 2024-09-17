"use client";
import Link from "next/link";
import { File, Code, Edit, Mail, User, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
const sidebarTopItems = [
  {
    Icon: File,
    path: "/",
  },

  {
    Icon: Code,
    path: "/projects",
  },
  {
    Icon: Edit,
    path: "/articles",
  },
  {
    Icon: Mail,
    path: "/contact",
  },
];

const sidebarBottomItems = [
  {
    Icon: User,
    path: "/about",
  },
  {
    Icon: Settings,
    path: "/settings",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="flex flex-col justify-between bg-sidebar-bg w-[1vw] min-w-[1px] h-[calc(100vh-30px-25px)] md:w-[6vw] lg:w-[1vw] xl:w-[2vw]">
      <div className="flex flex-col">
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`cursor-pointer w-full flex items-center justify-center p-1 hover:bg-sidebar-hover-bg ${
                pathname === path ? "border-l-2 border-accent-color" : ""
              }`}
            >
              <Icon
                className={`h-12 w-12 ${
                  pathname === path ? "text-accent-color" : "text-gray-600"
                }`}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-col">
        {sidebarBottomItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div className="cursor-pointer w-full flex items-center justify-center p-1">
              <Icon
                className={`h-12 w-12 ${
                  pathname === path ? "text-accent-color" : "text-gray-600"
                }`}
              />
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
