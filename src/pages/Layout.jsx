import { Outlet } from "react-router-dom";
import { Topbar } from "../components";

const Layout = () => {
  return (
    <div className="w-full flex items-start">
      <div className="hidden md:block md:w-[25%] lg:w-[15%] bg-red-600 h-screen fixed"></div>
      <div className="w-full flex ml-auto  items-start h-full relative flex-col md:w-[75%] lg:w-[85%] pb-4 bg-[#dadada]">
        <div className="w-full sticky top-0 shadow py-1 flex items-center bg-white z-50">
          <div className="w-[95%] mx-auto ">
            <Topbar />
          </div>
        </div>
        <div className="w-[90%] mx-auto  mt-[1rem]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
