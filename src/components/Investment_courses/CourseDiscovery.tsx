import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const CourseCard = ({ title, rating, students, duration }:any) => (
  <Card className="w-full bg-slate-200 h-20 mb-2">
    <CardContent className="flex p-4 h-full">
      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
        <Users className="text-blue-500" size={20} />
      </div>
      <div className="flex flex-col justify-between h-full flex-grow">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center text-gray-500 text-xs">
            <Users size={14} className="mr-1" />
            <span>{students}</span>
          </div>
          <div className="flex items-center text-gray-500 text-xs">
            <Clock size={14} className="mr-1" />
            <span>{duration}</span>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <span className="text-sm text-gray-500">{rating}</span>{" "}
              <Star className="text-gray-500" size={16} />
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const CourseDiscovery = () => {
  const courses = [
    {
      title: "Financial Planning for young adults",
      rating: 4,
      students: 180,
      duration: "2 hours",
    },
    {
      title: "Introduction to Cryptocurrency",
      rating: 5,
      students: 250,
      duration: "3 hours",
    },
    {
      title: "Personal Budgeting Basics",
      rating: 4,
      students: 150,
      duration: "1.5 hours",
    },
    {
      title: "Investment Strategies for Beginners",
      rating: 4,
      students: 200,
      duration: "2.5 hours",
    },
    {
      title: "Understanding Credit Scores",
      rating: 3,
      students: 120,
      duration: "1 hour",
    },
    {
      title: "Retirement Planning 101",
      rating: 5,
      students: 300,
      duration: "4 hours",
    },
  ];

  return (
    <div className="bg-gray-900 p-4 h-[450px] rounded-lg max-w-md mx-auto flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-semibold">
          Discover courses...
        </h2>
        <Button
          variant="secondary"
          className="bg-white text-black hover:bg-gray-200"
        >
          View All
        </Button>
      </div>
      <ScrollArea className="flex-grow pr-4">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </ScrollArea>
    </div>
  );
};

export default CourseDiscovery;
