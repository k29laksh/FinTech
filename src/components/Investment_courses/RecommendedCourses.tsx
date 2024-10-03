"use client"
import React, { useState, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CourseCard = ({ title, duration, rating, icon, color }) => (
  <Card className={`w-72 ${color} flex-shrink-0`}>
    <CardContent className="p-4 flex  flex-col  justify-between h-32">
      <div className="flex items-center mb-2">
        
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex items-center justify-between">
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
    </CardContent>
   <div className='p-6'>
   <Button className='text-sm bg-violet-600 hover:bg-violet-700 w-full mt-2'>Enroll</Button>
   </div>
  </Card>
);

const RecommendedCourses = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const courses = [
    { title: "Financial Planning for young adults", duration: 2, rating: 4, color: "bg-blue-100", icon: "💼" },
    { title: "Loan And Debt", duration: 3, rating: 5, color: "bg-purple-100", icon: "💰" },
    { title: "Investment And Retirement", duration: 10, rating: 4, color: "bg-pink-100", icon: "📊" },
    { title: "Budgeting Basics", duration: 1, rating: 4, color: "bg-green-100", icon: "📝" },
    { title: "Stock Market Fundamentals", duration: 5, rating: 5, color: "bg-yellow-100", icon: "📈" },
    { title: "Cryptocurrency 101", duration: 4, rating: 3, color: "bg-orange-100", icon: "🪙" },
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
    <div className="p-4 bg-gray-900 text-black">
      <h2 className="text-2xl font-bold mb-4 text-white">Recommended Courses</h2>
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
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white"
          onClick={() => scroll('left')}
          disabled={scrollPosition <= 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button 
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white"
          onClick={() => scroll('right')}
          disabled={scrollPosition >= scrollContainerRef.current?.scrollWidth - scrollContainerRef.current?.clientWidth}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default RecommendedCourses;