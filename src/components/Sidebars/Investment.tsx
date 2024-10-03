'use client';
import React, { useState } from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { VscGraph } from "react-icons/vsc";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { AiOutlineDashboard, AiOutlineFire, AiOutlineBook, AiOutlineSetting, AiOutlineQuestionCircle } from "react-icons/ai"; 
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineHistory } from "react-icons/md";

const InvestmentSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { icon: VscGraph, label: "My-Portfolio", path: "/market/my-portfolio" },
    { icon: LuLayoutDashboard, label: "Dashboard", path: "/market/dashboard" },
    { icon: AiOutlineBook, label: "Learning", path: "/learning" },
    { icon: MdOutlineHistory, label: "History", path: "/history" },
    { icon: AiOutlineSetting, label: "Settings", path: "/settings" },
    { icon: AiOutlineQuestionCircle, label: "Help and Support", path: "/help" },
  ];

  return (
    <div className="mt-[4rem] h-[calc(100vh-4rem)] z-40">
      {/* Sidebar */}
      <div
        className={`relative top-0 left-0 h-full w-56 shadow-sm shadow-gray-500 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 bg-black`}
      >
        {/* Filter Section */}
        <nav className="h-full">
          <div className="p-5 h-full flex flex-col justify-between">
            {/* Upper Section */}
            <div className="mb-2 flex flex-col space-y-4">
              {navItems.slice(0, 4).map((item, index) => (
                <NavItem key={index} item={item} isActive={pathname === item.path} />
              ))}
            </div>

            {/* Lower Section */}
            <div className="mb-2 flex flex-col space-y-4">
              {navItems.slice(4).map((item, index) => (
                <NavItem key={index} item={item} isActive={pathname === item.path} />
              ))}
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

const NavItem = ({ item, isActive }) => {
  const Icon = item.icon;
  return (
    <Link href={item.path} className="block">
      <div className={`flex items-center py-1 relative ${isActive ? 'text-blue-500' : 'text-white'}`}>
        <Icon size={22} className="mr-2" />
        <div>{item.label}</div>
        {isActive && (
          <div className="absolute bottom-0 left-0  w-full  h-0.5 bg-blue-500"></div>
        )}
      </div>
    </Link>
  );
};

export default InvestmentSidebar;