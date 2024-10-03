import ActivitySidebar from "@/components/Sidebars/activity_nav";
import React from "react";
import TopComponent from "./TopComponent";
import MiddleComponent from "./MiddleComponent";

const page = () => {
  return (
    <div className="min-h-[100vh-5rem] w-full flex text-white">
      <ActivitySidebar />
      <div className="w-full">
        <TopComponent />
        <MiddleComponent />
      </div>
    </div>
  );
};

export default page;
