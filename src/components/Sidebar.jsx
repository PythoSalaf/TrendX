import { Link } from "react-router-dom";
import { IoChatboxSharp } from "react-icons/io5";
import { MdCandlestickChart } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
const Sidebar = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto">
        <ul className="mt-12">
          <Link className="flex items-center text-lg font-semibold gap-x-3 bg-white rounded-2xl px-3 py-1">
            <IoChatboxSharp className="size-6 text-[#FD6708]" />
            <span>Chat</span>
          </Link>
          <Link className="flex my-2.5 items-center text-lg font-semibold gap-x-3 bg-white rounded-2xl px-3 py-1">
            <MdCandlestickChart className="size-7" />
            <span className="">Trades</span>
          </Link>
          <Link className="flex items-center text-lg font-semibold gap-x-3 bg-white rounded-2xl px-3 py-1">
            <IoAnalytics className="size-6" />
            <span>Analysis</span>
          </Link>
        </ul>
        <div className="mt-28  ">
          <div className="bg-[#F4DCCC] px-2 py-1 ">
            <h3 className=" md:text-sm lg:text-base">Previous 7 Days</h3>
          </div>
          <ul className="mt-2.5 mb-5">
            <li>Summarize the trend......</li>
          </ul>
        </div>
        <div className="mt-14  ">
          <div className="bg-[#F4DCCC] px-2 py-1 ">
            <h3 className=" md:text-sm lg:text-base">Previous 30 Days</h3>
          </div>
          <ul className="mt-2.5 mb-5">
            <li>Guess the Price......</li>
            <li>What is bnb Price......</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
