'use client';
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LearningActivityChart = () => {
  const data = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
      {
        label: 'Activity',
        data: [1, 2, 1, 3, 2, 1, 3], // Custom data
        borderColor: '#B794F4', // Purple line color
        backgroundColor: 'rgba(183, 148, 244, 0.5)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-[400px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default LearningActivityChart;
