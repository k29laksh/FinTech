'use client';
import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { AiOutlineDashboard, AiOutlineFire, AiOutlineBook, AiOutlineSetting, AiOutlineQuestionCircle } from "react-icons/ai"; 
import { LuLayoutDashboard } from "react-icons/lu";
import { PiNewspaperClipping } from "react-icons/pi";

const InvestmentSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="mt-[4rem] h-[calc(100vh-4rem)] z-40">
      {/* Sidebar */}
      <div
        className={`relative top-0 left-0 h-full w-56 shadow-sm shadow-gray-500 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300`}
      >
        {/* Filter Section */}
        <nav className="h-full">
          <div className="p-5 h-full flex flex-col justify-between">
            {/* Upper Section */}
            <div className="mb-2 flex flex-col space-y-4">
              <div className="flex items-center ">
                <LuLayoutDashboard size={22} className="text-white " />
                <div className="ml-2 text-white">Dashboard</div>
              </div>
              <div className="flex items-center ">
                <AiOutlineFire size={23} className="text-white " />
                <div className="ml-2 text-white">Trendings</div>
              </div>
              <div className="flex items-center ">
                <AiOutlineBook size={22} className="text-white " />
                <div className="ml-2 text-white">Learning</div>
              </div>
              <div className="flex items-center ">
                <PiNewspaperClipping size={22} className="text-white " />
                <div className="ml-2 text-white">News</div>
              </div>
            </div>

            {/* Lower Section */}
            <div className="mb-2 flex flex-col space-y-4">
              <div className="flex items-center ">
                <AiOutlineSetting size={22} className="text-white " />
                <div className="ml-2 text-white">Settings</div>
              </div>
              <div className="flex items-center ">
                <AiOutlineQuestionCircle size={22} className="text-white " />
                <div className="ml-2 text-white">Help and Support</div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Sidebar Toggle Button */}
      <button
        className="md:hidden fixed top-20 left-4 z-50 p-2 bg-white rounded-full shadow-md"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <FiArrowLeft className="h-6 w-6 text-black" />
        ) : (
          <FiArrowRight className="h-6 w-6 text-black" />
        )}
      </button>
    </div>
  );
};

export default InvestmentSidebar;
