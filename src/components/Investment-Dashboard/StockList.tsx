"use client";
import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stocks = [
  { name: 'Bitcoin', symbol: 'BTC', price: 42715.35, change: -0.17 },
  { name: 'Apple Inc.', symbol: 'AAPL', price: 175.00, change: 0.35 },
  { name: 'Ethereum', symbol: 'ETH', price: 2310.29, change: -0.05 },
  { name: 'Microsoft Corp.', symbol: 'MSFT', price: 335.45, change: 0.45 },
  { name: 'Solana', symbol: 'SOL', price: 95.31, change: -0.2 },
  { name: 'Amazon.com Inc.', symbol: 'AMZN', price: 145.20, change: -0.10 },
  { name: 'Tether USDT', symbol: 'USDT', price: 1.00, change: 0.00 },
  { name: 'Alphabet Inc.', symbol: 'GOOGL', price: 2800.50, change: 0.25 },
  { name: 'BNB', symbol: 'BNB', price: 300.85, change: -0.20 },
  { name: 'Tesla Inc.', symbol: 'TSLA', price: 740.15, change: -0.80 },
  { name: 'Avalanche', symbol: 'AVAX', price: 34.16, change: 0.15 },
  { name: 'Meta Platforms Inc.', symbol: 'META', price: 330.70, change: 0.05 },
  { name: 'Polkadot', symbol: 'DOT', price: 7.23, change: -0.10 },
  { name: 'NVIDIA Corp.', symbol: 'NVDA', price: 220.10, change: 1.00 },
] ;

const StockList = ({ setSelectedStock }:any) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStocks = stocks.filter(stock => 
    stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="w-[350px] text-white border-none bg-black">
      <CardHeader>
        <CardTitle className="text-white">Today&apos;s Stock Prices</CardTitle>
      </CardHeader>
      <CardContent>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mb-4 p-2 bg-white/15 text-white outline-none rounded"
        />
        <ScrollArea className="h-[465px] bg-white/10 w-full rounded-md px-3 py-2 pr-4 cursor-pointer">
          {filteredStocks.length > 0 ? (
            filteredStocks.map((crypto :any, index:any) => (
              <div 
                key={index} 
                className="flex justify-between items-center mb-1 hover:bg-white/10 px-2 py-2 rounded"
                onClick={() => setSelectedStock(crypto)}  // Set the entire stock object
              >
                <div className="flex items-center ">
                  <div className={`w-8 h-8 rounded-full mr-2 flex items-center justify-center text-white ${getColorClass(crypto.symbol)}`}>
                    {crypto.symbol.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{crypto.name}</div>
                    <div className="text-sm text-gray-400">{crypto.symbol}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white">${crypto.price.toFixed(2)}</div>
                  <div className={crypto.change >= 0 ? "text-green-400" : "text-red-400"}>
                    {crypto.change >= 0 ? '+' : ''}{crypto.change}%
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-white">No results found</div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};




const getColorClass = (symbol: keyof typeof colors): string => {
  const colors = {
    BTC: "bg-orange-600",
    ETH: "bg-blue-600",
    SOL: "bg-purple-600",
    USDT: "bg-green-600",
    BNB: "bg-yellow-600",
    AVAX: "bg-red-600",
    DOT: "bg-pink-600",
  } as const;

  return colors[symbol] || "bg-gray-600";
};


export default StockList;
