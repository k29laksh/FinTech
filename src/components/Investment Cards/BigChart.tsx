"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';

const BigChart = ({ stock }) => {
  const chartData = {
    labels: stock.data.labels,
    datasets: [
      {
        label: `${stock.symbol} Stock Price`,
        data: stock.data.prices,
        borderColor: '#4CAF50', // Green line
        backgroundColor: '#4CAF50',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { title: { display: true, text: 'Time' } },
      y: { title: { display: true, text: 'Price' }, beginAtZero: false },
    },
  };

  return (
    <div className="w-full h-96">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default BigChart;
