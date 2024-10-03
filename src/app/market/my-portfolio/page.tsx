import Dashboard from '@/components/Investment Cards/BalanceCard'
import InvestmentSidebar from '@/components/Sidebars/Investment'
import React from 'react'

const Page = () => {
  return (
    <div className="flex h-[100vh]">
      {/* Sidebar - Fixed Position */}
      <InvestmentSidebar />

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <Dashboard />
      </div>
    </div>
  )
}

export default Page
