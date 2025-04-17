import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets";
import { FaUserAlt } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const Topbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex relative items-center justify-between w-full">
      <div className="block md:hidden text-[#FD6708]">
        <IoMdMenu className="size-7" />
      </div>
      <Link to="/" className="flex items-center gap-x-1">
        <img src={Logo} alt="logo" className="w-[38px] md:w-[48px]" />
        <span className="text-xl md:text-2xl font-semibold">TrendX.ai</span>
      </Link>
      <div
        className="bg-[#FD6708] rounded-full w-[35px] h-[35px]  md:w-[40px] md:h-[40px] flex items-center justify-center cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        <FaUserAlt className="size-[60%] text-white" />
      </div>
      {toggle && (
        <div className="absolute right-0 top-[58px] bg-white py-3 w-[200px] rounded-xl">
          <div className="w-[90%] mx-auto">
            <div className="bg-[#FD6708] w-[94%] rounded-3xl mx-auto py-0.5">
              <h3 className="text-center text-white font-semibold">
                08xgjdhd...dkdkd
              </h3>
            </div>
            <div className="w-[90%] justify-center flex items-center mx-auto">
              <button>Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
