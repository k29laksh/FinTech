import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Star } from "lucide-react";

const BudgetGoalComponent = () => {
  const [sliderValue, setSliderValue] = useState(30); // Starting value (0 - 100)
  const minValue = 1000; // Minimum value for your slider
  const maxValue = 2000; // Maximum value for your slider

  // This will calculate the current value based on the slider's position.
  const currentValue = minValue + (sliderValue / 100) * (maxValue - minValue);

  return (
    <Card className="w- bg-gray-800 border-none text-white p-4 mt-8 mx-4">
      <CardContent className="p-0">
        <h2 className="text-lg font-semibold mb-4">Set your goal</h2>

        <div className="flex justify-between items-center mb-2">
          <span className="text-pink-500 font-bold">
            ₹{Math.round(currentValue)}
          </span>
          <span className="text-gray-400">
            ₹{maxValue}{" "}
            <Button variant="link" className="text-gray-400 p-0 h-auto">
              Edit
            </Button>
          </span>
        </div>

        {/* Normal left-to-right slider */}
        <Slider
          value={[sliderValue]}
          onValueChange={(value) => setSliderValue(value[0])}
          max={100}
          step={1}
          className="mb-4"
        />

        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-gray-400">Monthly Budget</span>
            <div>
              ₹{maxValue}{" "}
              <Button variant="link" className="text-gray-400 p-0 h-auto">
                Edit
              </Button>
            </div>
          </div>
          <div className="text-right">
            <span className="text-gray-400">Days Remaining</span>
            <div className="text-2xl font-bold">5</div>
          </div>
        </div>

        <Card className="bg-yellow-200 text-gray-800 p-3 mb-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 fill-current text-yellow-500" />
                <span className="font-semibold">Budget streak</span>
              </div>
              <div className="text-lg font-bold">4 days</div>
            </div>
            <div className="text-right">
              <div className="font-semibold">Next reward</div>
              <div className="text-lg font-bold">100 pts</div>
            </div>
          </div>
        </Card>

        <div className="flex gap-6 justify-center py-4">
          <Button className="bg-blue-600 text-white">+ New expense</Button>
          <Button className="bg-green-600 text-white">+ New Receipt</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetGoalComponent;
