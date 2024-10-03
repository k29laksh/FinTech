"use client";
import ActivitySidebar from "@/components/Sidebars/activity_nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Droplet, Sidebar, Zap } from "lucide-react";
import React, { useState } from "react";

interface Account {
  id: string;
  number: string;
  balance: number;
  bills: {
    electricity: number;
    water: number;
  };
}

const accounts: Account[] = [
  {
    id: "1",
    number: "XXXX XXXX XXXX 7348",
    balance: 245767,
    bills: {
      electricity: 2800,
      water: 400,
    },
  },
  {
    id: "2",
    number: "XXXX XXXX XXXX 2365",
    balance: 150000,
    bills: {
      electricity: 3200,
      water: 600,
    },
  },
];

const TopComponent = () => {
  const [selectedAccount, setSelectedAccount] = useState<Account>(accounts[0]);
  return (
      <div className="flex flex-col ml-8 mt-16">
        <h1 className="text-2xl font-poppins">
          Welcome Back, <span className="font-semibold">Aakanksha</span>
        </h1>
        <h2 className="text-lg font-poppins">
          Save smarter, spend wiser with real-time advice
        </h2>
        <div className="flex gap-4 w-full pr-4 pt-4">
          {/* Left Section */}
          <div className="md:col-span-4 w-full">
            <Card className="bg-red-50 border-none">
              <CardContent className="p-4">
                <h2 className="text-sm font-medium text-gray-600 mb-3">
                  Select your account :
                </h2>
                <div className="space-y-2">
                  {accounts.map((account) => (
                    <div
                      key={account.id}
                      className={`p-3 rounded-lg cursor-pointer ${
                        selectedAccount.id === account.id
                          ? "bg-white shadow-sm"
                          : ""
                      }`}
                      onClick={() => setSelectedAccount(account)}
                    >
                      <div className="text-sm font-medium">
                        Account {account.id}
                      </div>
                      <div className="text-xs text-gray-500">
                        {account.number}
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center text-gray-500 mt-2 px-3">
                    <span className="text-sm">🏦 Add Account</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Section */}
          <div className="md:col-span-8 space-y-4 w-full">
            {/* Balance Card */}
            <Card className="bg-yellow-50 border-none">
              <CardContent className="p-4">
                <div className="text-sm text-gray-600 mb-1">Total Balance</div>
                <div className="text-2xl font-semibold">
                  ₹{selectedAccount.balance.toLocaleString()}
                </div>
              </CardContent>
            </Card>
            {/* Card Spendings Button */}
            <Card className="bg-gray-900 border-none">
              <CardContent className="p-4">
                <div className="flex justify-between items-center text-white">
                  <span className="text-sm">View your card spendings</span>
                  <span>ᐳ</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bills Card */}
          <Card className="bg-blue-50 border-none w-full">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm font-medium text-gray-600">
                  Bills and Other Payments
                </div>
                <Button
                  variant="ghost"
                  className="text-xs text-gray-500 h-auto p-0"
                >
                  View all ᐳ
                </Button>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-gray-600" />
                    <span className="text-sm">Electricity Bill</span>
                  </div>
                  <span className="text-sm">
                    ₹ {selectedAccount.bills.electricity}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Droplet className="h-4 w-4 text-gray-600" />
                    <span className="text-sm">Water Bill</span>
                  </div>
                  <span className="text-sm">
                    ₹ {selectedAccount.bills.water}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  );
};

export default TopComponent;
