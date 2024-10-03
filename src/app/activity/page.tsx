"use client"
import ActivitySidebar from "@/components/Sidebars/activity_nav";
import React from "react";
import TopComponent from "./TopComponent";
import MiddleComponent from "./MiddleComponent";
import ExpenseDashboard from "./ExpenseDashboard";
import BudgetGoalComponent from "./BudgetGoalComponent";
import InvestmentSidebar from "@/components/Sidebars/Investment";

const page = () => {
  return (
   <div>
     <div className="flex h-[100vh]">
      {/* Sidebar - Fixed Position */}
      <ActivitySidebar />
      <div className="flex-1 overflow-y-auto ">
        <TopComponent />
        <MiddleComponent />
        <div className="flex gap-4">
          <div className="w-2/3">
          <ExpenseDashboard />
        </div>
        <div className="w-1/3">
          <BudgetGoalComponent/>
        </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default page;
