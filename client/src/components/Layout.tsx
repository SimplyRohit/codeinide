import Titlebar from "../components/Titlebar";
import Sidebar from "../components/Sidebar";
import Explorer from "../components/Explorer";
import Bottombar from "../components/Bottombar";
import Tabsbar from "./Tabsbar";
import Xterm from "./Xterm";
const Layout = ({ children }) => {
  return (
    <>
      <Titlebar />
      <div className="flex  bg-[var(--main-bg)]">
        <Sidebar />
        <Explorer />
        <div className="w-full">
          <Tabsbar />
          <Xterm />

          <main
            id="main-editor"
            className="p-8 text-[var(--text-color)] font-['JetBrains Mono'] flex-1 h-[85vh] overflow-y-auto smooth-scroll scrollbar scrollbar-track-[var(--scrollbar-track-bg)] scrollbar-thumb-[var(--scrollbar-thumb-bg)] border-l-[1px] border-l-[#1e1f29]"
          >
            {children}
          </main>
        </div>
      </div>

      <Bottombar />
    </>
  );
};

export default Layout;
