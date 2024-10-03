import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronRight, Search } from "lucide-react";
import React from "react";

interface Transaction {
  id: string;
  date: {
    day: number;
    month: string;
  };
  account: string;
  accountNumber: string;
  amount: number;
  purpose: string;
}

const transactions: Transaction[] = [
  {
    id: "1",
    date: {
      day: 25,
      month: "SEP",
    },
    account: "Khushi",
    accountNumber: "XXXX XXXX XXXX 3214",
    amount: 200,
    purpose: "Electricity Bill",
  },
  {
    id: "2",
    date: {
      day: 24,
      month: "SEP",
    },
    account: "DMart",
    accountNumber: "XXXX XXXX XXXX 5214",
    amount: 1483,
    purpose: "Grocery Shopping",
  },
];

const MiddleComponent = () => {
  return (
    <div className="flex gap-4 mt-8 mx-4">
      {/* Transactions */}
      <Card className="bg-gray-900 text-white border-none w-full">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Transactions</h2>
            <Button variant="default" className="text-sm text-gray-400">
              View all <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="relative mb-6">
            <Input
              placeholder="Search Transactions"
              className="bg-gray-800 border-none text-gray-400 pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-lg ${
                    transaction.id === "1" ? "bg-pink-200" : "bg-yellow-200"
                  }`}
                >
                  <div className="text-black text-center">
                    <div className="text-lg font-bold">
                      {transaction.date.day}
                    </div>
                    <div className="text-xs font-medium">
                      {transaction.date.month}
                    </div>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-medium">
                        {transaction.account}
                      </div>
                      <div className="text-xs text-gray-400">
                        {transaction.accountNumber}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-red-500">
                      ₹{transaction.amount}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {transaction.purpose}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Budget Planning */}
      <Card className="bg-gray-900 text-white border-none w-full">
        <CardContent className="p-6">
          <h2 className="text-lg font-medium mb-4">Budget Planning</h2>
          <div className="space-y-4">
            <Input
              placeholder="Enter Amount. Eg. Rs.20,000"
              className="bg-gray-800 border-none text-gray-400"
            />
            <Button
              variant="outline"
              className="w-full bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
            >
              Standard
            </Button>
            <Button
              variant="outline"
              className="w-full bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
            >
              Customized
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MiddleComponent;
