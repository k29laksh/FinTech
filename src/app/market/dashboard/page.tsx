import CurrectStocks from '@/components/Investment-Dashboard/CurrentStocks2'
import InvestmentSidebar from '@/components/Sidebars/Investment'
import React from 'react'
import '@/css/scrollbar.css'
const page = () => {
  return (
    <div className="flex h-[100vh]">
      {/* Sidebar - Fixed Position */}
      <InvestmentSidebar />

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto mt-[4rem]">
      <CurrectStocks/>

      
      </div>
    </div>
  )
}

export default page
