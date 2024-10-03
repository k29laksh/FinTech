"use client";
import React from "react";
import LearningActivityChart from "./LearningActivityChart";
import CoursesCompletedChart from "./CoursesCompletedChart";
import CourseCards from "./CoursesCards";
import RecommendedCourses from "./RecommendedCourses";
import CourseDiscovery from "./CourseDiscovery";
import ProgressCoins from "./ProgressCoins";

const ProgressContainer = () => {
  return (
    <div className="flex gap-8 ">
      <div className= "left rounded-lg h-[calc(100vh-4rem)] overflow-y-auto bg-gray-900  text-white w-[65%]">
        <div className="w-full p-6 rounded-lg">
          <h2 className="text-3xl font-medium mb-12">
            Your all-in-one financial guide, at your fingertips
          </h2>
          <div className="flex  w-full justify-between">
            <div>
              <h3 className="text-lg font-medium mb-4">Learning Activity</h3>
              <LearningActivityChart />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Courses Completed</h3>
              <CoursesCompletedChart />
            </div>
          </div>
        </div>
        <div>
          <CourseCards />
        </div>

        <div>
          <RecommendedCourses />
        </div>
      </div>

      <div className="right h-[calc(100vh-5rem)] w-[30%] flex flex-col gap-4">
        <div className="">
        <ProgressCoins/>
        </div>

        <div className="h-full">
            <CourseDiscovery/>
        </div>
      </div>
    </div>
  );
};

export default ProgressContainer;
