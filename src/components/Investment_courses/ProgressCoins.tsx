import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProgressCoins = ({ balance = 200 }) => {
  return (
    <Card className="w-full max-w-md border-none mx-auto bg-slate-800 text-white">
      <CardContent className="p-6">
        <h2 className="text-center text-xl font-semibold mb-4">Winning Coins</h2>
        <div className="flex justify-center items-center mb-4">
          <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mr-2">
            <span className="text-yellow-600 text-2xl font-bold">C</span>
          </div>
          <span className="text-4xl font-bold">{balance}</span>
        </div>
        <div className="text-center">
          <Button variant="secondary" className="bg-white text-slate-800 hover:bg-gray-200">
            Redeem CitiCoins
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressCoins;