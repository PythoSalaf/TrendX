import { Link } from "react-router-dom";
import { Logo } from "../assets";
import { FaUserAlt } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <Link to="/" className="flex items-center gap-x-1">
        <img src={Logo} alt="logo" className="w-[38px] md:w-[48px]" />
        <span className="text-xl md:text-2xl font-semibold">TrendX.ai</span>
      </Link>
      <div className="bg-[#dadada] rounded-full w-[35px] h-[35px]  md:w-[40px] md:h-[40px] flex items-center justify-center cursor-pointer">
        <FaUserAlt className="size-[60%]" />
      </div>
    </div>
  );
};

export default Topbar;
