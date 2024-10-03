"use client"
import ActivitySidebar from "@/components/Sidebars/activity_nav";
import React from "react";
import TopComponent from "./TopComponent";
import MiddleComponent from "./MiddleComponent";
import ExpenseDashboard from "./ExpenseDashboard";
import BudgetGoalComponent from "./BudgetGoalComponent";

const page = () => {
  return (
    <div className="min-h-[100vh-5rem] w-full flex text-white">
      <ActivitySidebar />
      <div className="w-full">
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
  );
};

export default page;
