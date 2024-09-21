import Titlebar from "../components/Titlebar";
import Sidebar from "../components/Sidebar";
import Bottombar from "../components/Bottombar";
const Layout = ({ children }: any) => {
  return (
    <>
      <Titlebar />
      <div className="flex  bg-[var(--main-bg)]">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>

      <Bottombar />
    </>
  );
};

export default Layout;
