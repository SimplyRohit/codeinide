"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FilesIcon from "../icons/FilesIcon";
import GithubIcon from "../icons/GithubIcon";
import CodeIcon from "../icons/CodeIcon";
import PencilIcon from "../icons/PencilIcon";
import MailIcon from "../icons/MailIcon";
import AccountIcon from "../icons/AccountIcon";
import SettingsIcon from "../icons/SettingsIcon";

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: "",
  },
  {
    Icon: GithubIcon,
    path: "",
  },
  {
    Icon: CodeIcon,
    path: "",
  },
  {
    Icon: PencilIcon,
    path: "",
  },
  {
    Icon: MailIcon,
    path: "",
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: "",
  },
  {
    Icon: SettingsIcon,
    path: "",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="bg-[var(--sidebar-bg)] flex flex-col justify-between w-[4.5vw] min-w-[40px] h-[calc(100vh-55px)]">
      {/* Top icons */}
      <div>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`cursor-pointer w-full hover:bg-[var(--sidebar-hover-bg)] ${
                pathname === path && "border-l-2 border-[var(--accent-color)]"
              }`}
            >
              <Icon
                fill={
                  pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className="h-[48px] w-[48px] p-[0.65rem] mx-auto"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom icons */}
      <div>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`cursor-pointer w-full hover:bg-[var(--sidebar-hover-bg)] ${
                pathname === path && "border-l-2 border-[var(--accent-color)]"
              }`}
            >
              <Icon
                fill={
                  pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className="h-[48px] w-[48px] p-[0.65rem] mx-auto"
              />
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
