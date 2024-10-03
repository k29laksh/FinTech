"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

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
    name: "Spotify Tech...",
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

export default function CurrectStocks({ setSelectedStock }) {
  return (
    <div className="gap-4">
      <h2 className="text-xl text-white font-semibold">My Stocks</h2>
      <div className="flex gap-4 py-4">
        {stocks.map((stock) => (
          <Card
            key={stock.symbol}
            className="overflow-hidden cursor-pointer bg-white/10 w-72 text-gray-100 border-none"
            onClick={() => setSelectedStock(stock)} // Set the clicked stock's details in the parent state
          >
            <CardContent className="px-4 py-3">
              <div className="flex space-x-2 mb-4">
               <div>
               <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 mt-1">
                  <img
                    src={stock.logo}
                    alt={`${stock.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
               </div>
                <div>
                  <h3 className="font-bold text-sm">{stock.symbol}</h3>
                  <p className="text-sm text-gray-500">{stock.name}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-bold">${stock.price.toLocaleString()}</div>
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
    </div>
  );
}
