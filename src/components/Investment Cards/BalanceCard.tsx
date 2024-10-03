"use client";
import { Card } from "../ui/card";
import { useState, useEffect } from "react";
import axios from "axios";
import { IoSearchOutline } from "react-icons/io5";
import CurrencyConverter from "./CurrencyConverter";
import StockChart from "./StockChart";
const mockStockData = [
  { "name": "Colgate-Palmolive", "price": 120.36, "change": -120.36 },
  { "name": "Nestle India", "price": 189.36, "change": -189.36 },
  { "name": "P&G Hygiene", "price": 92.50, "change": 92.50 },
  { "name": "MRF", "price": 197.50, "change": 197.50 },
  { "name": "IBM", "price": 250.00, "change": -150.00 },
  { "name": "Tata Motors", "price": 350.00, "change": 100.00 },
  { "name": "HDFC Bank", "price": 450.00, "change": 50.00 },
  { "name": "Infosys", "price": 800.00, "change": 200.00 },
  { "name": "Apple", "price": 150.25, "change": 75.25 },
  { "name": "Reliance Industries", "price": 1120.45, "change": -120.45 },
  { "name": "Samsung", "price": 920.75, "change": 20.75 },
  { "name": "Tesla", "price": 720.90, "change": -180.90 },
  { "name": "Google", "price": 2000.45, "change": 500.45 },
  { "name": "Microsoft", "price": 1500.75, "change": 250.75 },
  { "name": "Amazon", "price": 3000.10, "change": -100.10 },
  { "name": "Wipro", "price": 320.80, "change": -20.80 },
  { "name": "Mahindra & Mahindra", "price": 700.25, "change": 100.25 },
  { "name": "Bajaj Finance", "price": 1700.50, "change": 300.50 },
];


export default function Dashboard() {
  const [stockData, setStockData] = useState(null);
  const [stocks, setStocks] = useState(mockStockData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all"); // all, profit, loss

  // Filter stocks based on search term and filter type
  const filteredStocks = stocks
    .filter(stock => stock.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(stock => {
      if (filterType === "profit") return stock.change > 0;
      if (filterType === "loss") return stock.change < 0;
      return true; // For "all"
    });

  useEffect(() => {
    // Fetch real-time stock data from Alpha Vantage API
    const fetchStockData = async () => {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=IW6TBX85KQJYB68P`
      );
      setStockData(response.data);
    };
    fetchStockData();
  }, []);

  return (
    <div className="h-[calc(100vh-4rem)] bg-black text-white flex relative top-[4rem]">
      {/* Left Section */}
      <div className="left w-[65%] h-full overflow-y-auto p-8">
        <div className="gap-6 flex flex-col">
          <div className="gap-6 flex">
            <Card className="p-6 w-full bg-white/10 h-60 border-none">
              <div>
                <h2 className="text-2xl text-white font-bold">
                  Account Balance
                </h2>
                <p className="mt-4 text-3xl text-white">$10,000.00</p>
              </div>
              <div>
                <CurrencyConverter />
              </div>
            </Card>

            <Card className="p-6 w-full bg-white/10 h-60 border-none">
              <div className="flex h-full flex-col justify-between gap-4">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-xl text-white font-semibold">
                      Portfolio Value
                    </h2>
                    <p className="mt-2 text-xl text-green-500 font-medium">
                      $5,000.00
                    </p>
                  </div>

                  <div className="text-sm">
                    <p className="text-gray-100">Overall returns</p>
                    <p className="text-green-500 font-medium">+2.36%</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl text-white font-bold">
                    Total Investment
                  </h2>
                  <p className="mt-2 text-2xl text-white">$5,000.00</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Stock Data Section */}
          <div className="mt-8 w-full">
              <StockChart />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="h-[calc(100vh-4rem)] w-[30%] bg-black text-white flex flex-col">
      {/* Fixed Search and Filter Section */}
      <div className="p-8 pb-4">
        {/* Search Bar */}
        <div className="flex justify-between gap-6 mb-4">
          <h2 className="text-xl text-gray-100 font-semibold">Transactions</h2>
          <div className="flex items-center gap-1">
            <IoSearchOutline className="text-gray-300" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-full text-sm text-white border-b outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-6 text-sm">
          <button
            onClick={() => setFilterType("all")}
            className={`py-1 px-4 rounded ${filterType === "all" ? "bg-white/95 text-black" : "bg-white/15"}`}
          >
            All
          </button>
          <button
            onClick={() => setFilterType("profit")}
            className={`py-1 px-4 rounded ${filterType === "profit" ? "bg-white/95 text-black" : "bg-white/15"}`}
          >
            Profit
          </button>
          <button
            onClick={() => setFilterType("loss")}
            className={`py-1 px-4 rounded ${filterType === "loss" ? "bg-white/95 text-black" : "bg-white/15"}`}
          >
            Loss
          </button>
        </div>
      </div>

      {/* Scrollable Transaction History */}
      <div className="flex-1 overflow-y-auto px-8 pb-8">
        <div className="flex flex-col gap-3">
          {filteredStocks.map((stock, index) => (
            <Card key={index} className="py-4 px-4 bg-white/10 flex justify-between items-center border-none">
              <h3 className="text-white">{stock.name}</h3>
              <p className={stock.change > 0 ? "text-green-500" : "text-red-500"}>
                {stock.change > 0 ? "+" : ""} {stock.change.toFixed(2)}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
