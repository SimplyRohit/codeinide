import Image from "next/image";
import vscode_icon from "../public/vscode_icon.svg";
const Titlebar = () => {
  return (
    <section className="bg-[#181818] h-8 px-2 flex items-center justify-center text-white text-sm border-b-[1px] border-[#2B2B2B] font-sans">
      <Image
        src={vscode_icon.src}
        alt="VSCode Icon"
        height={15}
        width={15}
        className="mr-2"
      />
      <div className="flex  items-center ml-2">
        <p className="px-2 cursor-pointer">File</p>
        <p className="px-2 cursor-pointer">Edit</p>
        <p className="px-2 cursor-pointer">View</p>
        <p className="px-2 cursor-pointer">Go</p>
        <p className="px-2 cursor-pointer">Run</p>
        <p className="px-2 cursor-pointer">Terminal</p>
        <p className="px-2 cursor-pointer">Help</p>
      </div>
      <p className="flex-1  items-center text-center pr-48">
        User - Visual Studio Code
      </p>
      <div className="flex items-center ml-auto">
        <span className="block h-3.5 w-3.5 rounded-full bg-yellow-400 mx-1 cursor-pointer"></span>
        <span className="block h-3.5 w-3.5 rounded-full bg-green-400 mx-1 cursor-pointer"></span>
        <span className="block h-3.5 w-3.5 rounded-full bg-red-500 mx-1 cursor-pointer"></span>
      </div>
    </section>
  );
};

export default Titlebar;
