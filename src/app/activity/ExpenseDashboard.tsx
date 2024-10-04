import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Chart, { ChartData, ChartOptions } from "chart.js/auto";

// Define the weekly data
const weekDays = ["M", "T", "W", "T", "F", "S", "S"];
const weeklyProgress = [70, 40, 55, 45, 60, 80, 75];

// Define the monthly expenses structure
interface MonthlyExpense {
  name: string;
  value: number;
  color: string;
}

const monthlyExpenses: MonthlyExpense[] = [
  { name: "Housing", value: 30, color: "#94a3b8" },
  { name: "Transportation", value: 25, color: "#60a5fa" },
  { name: "Food", value: 20, color: "#fca5a5" },
  { name: "Shopping", value: 15, color: "#86efac" },
  { name: "Other", value: 10, color: "#5eead4" },
];

const ExpenseDashboard: React.FC = () => {
  const weeklyChartRef = useRef<HTMLCanvasElement | null>(null);
  const monthlyChartRef = useRef<HTMLCanvasElement | null>(null);
  const weeklyChartInstance = useRef<Chart<"bar"> | null>(null);
  const monthlyChartInstance = useRef<Chart<"doughnut"> | null>(null);

  useEffect(() => {
    const createWeeklyChart = () => {
      if (weeklyChartInstance.current) {
        weeklyChartInstance.current.destroy();
      }

      if (weeklyChartRef.current) {
        const ctx = weeklyChartRef.current.getContext("2d");
        if (ctx) {
          weeklyChartInstance.current = new Chart(ctx, {
            type: "bar",
            data: {
              labels: weekDays,
              datasets: [
                {
                  data: weeklyProgress,
                  backgroundColor: "#60a5fa",
                  borderRadius: 50,
                  borderSkipped: false,
                  barPercentage: 0.3,
                  categoryPercentage: 1,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  display: false,
                  grid: { display: false },
                },
                y: {
                  display: false,
                  max: 100,
                  grid: { display: false },
                },
              },
              plugins: {
                legend: { display: false },
                tooltip: { enabled: false },
              },
              layout: {
                padding: {
                  top: 10,
                  bottom: 10,
                },
              },
            },
          });
        }
      }
    };

    const createMonthlyChart = () => {
      if (monthlyChartInstance.current) {
        monthlyChartInstance.current.destroy();
      }

      if (monthlyChartRef.current) {
        const ctx = monthlyChartRef.current.getContext("2d");
        if (ctx) {
          // Ensure the type for the doughnut chart is correct
          monthlyChartInstance.current = new Chart(ctx, {
            type: "doughnut",
            data: {
              labels: monthlyExpenses.map((exp) => exp.name),
              datasets: [
                {
                  data: monthlyExpenses.map((exp) => exp.value),
                  backgroundColor: monthlyExpenses.map((exp) => exp.color),
                  borderWidth: 0,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              cutout: "70%", // Doughnut cutout
              plugins: {
                legend: { display: false },
                tooltip: { enabled: false },
              },
            },
          });
        }
      }
    };

    createWeeklyChart();
    createMonthlyChart();

    return () => {
      if (weeklyChartInstance.current) {
        weeklyChartInstance.current.destroy();
      }
      if (monthlyChartInstance.current) {
        monthlyChartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-8 mx-4 text-white">
      <Card className="w-full md:w-1/2 bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg text-white font-normal">
            This Week
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-between h-64">
          <div className="h-56">
            <canvas ref={weeklyChartRef}></canvas>
          </div>
          <div className="flex justify-between mt-2">
            {weekDays.map((day) => (
              <span key={day} className="text-sm text-gray-400">
                {day}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="w-full md:w-1/2 bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg text-white font-normal">
            This Month
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 relative">
            <canvas ref={monthlyChartRef}></canvas>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4">
            {monthlyExpenses.map((expense) => (
              <div key={expense.name} className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-1"
                  style={{ backgroundColor: expense.color }}
                ></div>
                <span className="text-sm text-gray-300">
                  {expense.name} {expense.value}%
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpenseDashboard;
