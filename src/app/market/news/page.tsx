import Dashboard from '@/components/Investment Cards/BalanceCard'
import InvestmentSidebar from '@/components/Sidebars/Investment'
import React from 'react'
import '@/css/scrollbar.css'
import StockNews from '@/components/Investment_news/StockNews'


const Page = () => {
  return (
    <div className="flex h-[100vh]">
      {/* Sidebar - Fixed Position */}
      <InvestmentSidebar />

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <StockNews />
      </div>
    </div>
  )
}

export default Page
