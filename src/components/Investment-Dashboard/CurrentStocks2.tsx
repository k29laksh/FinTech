"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { FaApple } from "react-icons/fa";
import StockList from "./StockList";
import StockChart2 from "./StockChart2";
import Image from "next/image";
const stocks = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 15238.0,
    change: 5.9,
    logo: "/apple-logo.png",
  },
  {
    symbol: "GOGL",
    name: "Google Corp",
    price: 6842.0,
    change: 5.9,
    logo: "/google-logo.png",
  },
  {
    symbol: "SPOT",
    name: "Spotify Technology SA",
    price: 12238.0,
    change: -5.9,
    logo: "/spotify-logo.png",
  },
  {
    symbol: "TWTR",
    name: "Twitter Inc.",
    price: 5238.0,
    change: 5.9,
    logo: "/twitter-logo.jpg",
  },
];

export default function CurrectStocks2() {
  const [selectedStock, setSelectedStock] = useState({
    name: "NVIDIA Corp.",
    symbol: "NVDA",
    price: 220.1,
    change: 1.0,
  }); // Default stock symbol

  return (
    <div className="gap-4 px-4">
      <h2 className="text-xl text-white font-semibold">My Stocks</h2>
      <div className="flex overflow-y-auto gap-4 py-4">
        {stocks.map((stock) => (
          <Card
            key={stock.symbol}
            className="overflow-hidden bg-white/10 w-64 text-gray-100 border-none"
          >
            <CardContent className="p-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={stock.logo}
                    alt={`${stock.name} logo`}
                    className="w-full h-full object-cover"
                    width={150} // Specify the width
                    height={50} // Specify the height
                  />
                </div>
                <div>
                  <h3 className="font-bold">{stock.symbol}</h3>
                  <p className="text-sm text-gray-500">{stock.name}</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-xl font-bold mb-2">
                  ${stock.price.toLocaleString()}
                </div>
                <div
                  className={`flex items-center ${
                    stock.change >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {stock.change >= 0 ? (
                    <ArrowUpIcon className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDownIcon className="w-4 h-4 mr-1" />
                  )}
                  <span>{Math.abs(stock.change)}% </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex  justify-between">
        <div className="w-[25%]">
          <StockList setSelectedStock={setSelectedStock} />
        </div>

        <div className="w-[70%] pr-10">
          <StockChart2 stockSymbol={selectedStock} />
        </div>
      </div>
    </div>
  );
}
