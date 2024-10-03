import InvestmentSidebar from '@/components/Sidebars/Investment'
import React from 'react'
import '@/css/scrollbar.css'
import ProgressContainer from '@/components/Investment_courses/ProgressContainer'
const page = () => {
  return (
    <div className="flex h-[100vh]">
      {/* Sidebar - Fixed Position */}
      <InvestmentSidebar />

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto mt-[4rem]">
      <ProgressContainer/>

      
      </div>
    </div>
  )
}

export default page
