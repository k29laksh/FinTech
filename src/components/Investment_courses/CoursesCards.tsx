"use client"
import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CourseCard = ({ title, duration, progress, rating }) => (
  <Card className="w-72 bg-slate-300 flex-shrink-0">
    <CardHeader className="pb-2">
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span className="text-sm">{duration} hours</span>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      <div className='text-gray-600 text-sm py-2'>Progress</div>
      <Progress value={progress} className="h-2 bg-gray-200" indicatorClassName="bg-blue-500" />
      <div className="text-right text-sm mt-1">{progress}%</div>
      <Button className='text-sm bg-violet-600 hover:bg-violet-700 w-full mt-2'>Complete</Button>
    </CardContent>
  </Card>
);

const CourseCards = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const courses = [
    { title: "Financial Goals", duration: 2, progress: 46, rating: 4 },
    { title: "Tax Planning", duration: 4, progress: 78, rating: 4 },
    { title: "Investment Strategies", duration: 3, progress: 25, rating: 5 },
    { title: "Retirement Planning", duration: 5, progress: 60, rating: 4 },
    { title: "Budgeting Basics", duration: 1, progress: 90, rating: 3 },
    { title: "Estate Planning", duration: 4, progress: 15, rating: 5 },
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setScrollPosition(container.scrollLeft + scrollAmount);
    }
  };

  return (
    <div className="p-4 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-4">My Courses</h2>
      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-hidden scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
        <Button 
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700"
          onClick={() => scroll('left')}
          disabled={scrollPosition <= 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button 
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700"
          onClick={() => scroll('right')}
          disabled={scrollPosition >= scrollContainerRef.current?.scrollWidth - scrollContainerRef.current?.clientWidth}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CourseCards;