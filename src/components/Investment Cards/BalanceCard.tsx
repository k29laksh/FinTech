"use client";
import { Card } from "../ui/card";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const [stockData, setStockData] = useState(null);

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
    <div className="h-[calc(100vh-4rem)]  relative top-[4rem] overflow-y-auto bg-black text-white">
      <div className="container mx-auto p-8 flex justify-between ">
        {/* Portfolio Balance Section */}
        <div className=" gap-6 flex-col flex w-[65%] ">
          <div className=" gap-6 flex">
          <Card className="p-6 w-full bg-white/10 h-60 border-none">
            <div>
              <h2 className="text-2xl text-white font-bold">Account Balance</h2>
              <p className="mt-4 text-3xl text-white">$10,000.00</p>
            </div>
          </Card>

          <Card className="p-6 w-full bg-white/10 h-60 border-none">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-2xl text-white font-bold">
                    Portfoilio Value
                  </h2>
                  <p className="mt-2 text-2xl text-green-500 font-medium">
                    $5,000.00
                  </p>
                </div>

                <div className="">
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
        <div className="mt-8 w-full ">
          <Card className="p-6 bg-white/10 border-none">
            <h2 className="text-2xl font-bold">Real-Time Stock Data</h2>
            {stockData ? (
              <div className="mt-4">
                <p className="text-xl">
                  IBM Stock Price: <span className="text-green-500"> </span>
                </p>
              </div>
            ) : (
              <p>Loading stock data...</p>
            )}
          </Card>
        </div>
        </div>

        {/* Transactions Section */}
        <div className=" flex flex-col w-[30%] gap-4">
        <h2 className="text-2xl text-gray-100 font-bold">
                   Transactions
                  </h2>
                  <div className="flex gap-10 ">
                    <div className="bg-white/95 text-black rounded py-1 px-3">All</div>
                    <div className="bg-white/15 rounded py-1 px-3">Profit</div>
                    <div className="bg-white/15 rounded py-1 px-3">Loss</div>
                  </div>
         <div className="flex flex-col gap-3">
          <Card className="py-4 px-4 bg-white/10 flex justify-between items-center border-none">
            <h3 className=" text-white ">
            Colgate-Palmoliv	            </h3>
            <p className=" text-green-500">+ $197.50</p>
          </Card>
         <Card className="py-4 px-4 bg-white/10 flex justify-between items-center border-none">
            <h3 className=" text-white ">
            Nestle India	
            </h3>
            <p className=" text-red-500">- $189.36</p>
          </Card>

         <Card className="py-4 px-4 bg-white/10 flex justify-between items-center border-none">
            <h3 className=" text-white ">
            Colgate-Palmoliv	            </h3>
            <p className=" text-red-500">- $120.36</p>
          </Card>

          <Card className="py-4 px-4 bg-white/10 flex justify-between items-center border-none">
            <h3 className=" text-white ">
            P & G Hygiene	            </h3>
            <p className=" text-green-500">+ 92.50</p>
          </Card>
         </div>

          
        </div>
        </div>


       
    </div>
  );
}
