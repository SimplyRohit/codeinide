"use client";
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
  },
  {
    Icon: GithubIcon,
  },
  {
    Icon: CodeIcon,
  },
  {
    Icon: PencilIcon,
  },
  {
    Icon: MailIcon,
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
  },
  {
    Icon: SettingsIcon,
  },
];

const Sidebar = ({
  isExplorerOpen,
  setIsExplorerOpen,
  isXtermOpen,
  setIsXtermOpen,
}) => {
  return (
    <div className="bg-[#181818] flex flex-col border-r-[1px] border-[#3C3C3C] justify-between min-w-[2.8vw] h-full">
      <div>
        {sidebarTopItems.map(({ Icon, index }) => (
          <div
            key={index}
            onClick={() => {
              if (Icon === FilesIcon) {
                setIsExplorerOpen(!isExplorerOpen ? true : false);
              } else if (Icon === CodeIcon) {
                setIsXtermOpen(!isXtermOpen ? true : false);
              }
            }}
            className={`cursor-pointer w-full hover:bg-[var(--sidebar-hover-bg)]`}
          >
            <Icon
              fill={"rgb(225, 228, 232)"}
              className="h-[42px] w-[42px] p-[0.65rem] mx-auto"
            />
          </div>
        ))}
      </div>

      <div>
        {sidebarBottomItems.map(({ Icon, index }) => (
          <div
            key={index}
            className={`cursor-pointer w-full hover:bg-[var(--sidebar-hover-bg)]
              `}
          >
            <Icon
              fill={"rgb(225, 228, 232)"}
              className="h-[42px] w-[42px] p-[0.65rem] mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
