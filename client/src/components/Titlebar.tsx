" use client";
import Image from "next/image";

const Titlebar = () => {
  return (
    <section className="bg-gray-800 h-8 px-2 flex items-center justify-between text-white font-sans text-sm border-b border-gray-900">
      <Image
        src="/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className="w-4 h-4"
      />
      <div className="flex flex-1 ml-2 space-x-2">
        <p className="cursor-pointer">File</p>
        <p className="cursor-pointer">Edit</p>
        <p className="cursor-pointer">View</p>
        <p className="cursor-pointer">Go</p>
        <p className="cursor-pointer">Run</p>
        <p className="cursor-pointer">Terminal</p>
        <p className="cursor-pointer">Help</p>
      </div>
      <p className="flex-1 text-center">Nitin Ranganath - Visual Studio Code</p>
      <div className="flex space-x-2">
        <span className="w-3 h-3 rounded-full bg-yellow-300 cursor-pointer"></span>
        <span className="w-3 h-3 rounded-full bg-green-400 cursor-pointer"></span>
        <span className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"></span>
      </div>
    </section>
  );
};

export default Titlebar;
