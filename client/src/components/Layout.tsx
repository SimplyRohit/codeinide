import Titlebar from "../components/Titlebar";
import Sidebar from "../components/Sidebar";
import Explorer from "../components/Explorer";
import Bottombar from "../components/Bottombar";
import Xterm from "./Xterm";
const Layout = ({ children }) => {
  return (
    <>
      <Titlebar />
      <div className="flex  bg-[var(--main-bg)]">
        <Sidebar />
        <Explorer />
        <div className="w-full">
          <Xterm />

          {children}
        </div>
      </div>

      <Bottombar />
    </>
  );
};

export default Layout;
