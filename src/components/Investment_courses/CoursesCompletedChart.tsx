// components/CoursesCompletedChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CoursesCompletedChart = () => {
  const data = {
    labels: ['Completed', 'Not Completed'],
    datasets: [
      {
        label: 'Courses',
        data: [32, 68], // Custom data (percentage)
        backgroundColor: ['#D6BCFA', '#9F7AEA'], // Colors for completed and not completed
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    cutout: '70%', // Creates the donut effect
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
          },
        },
      },
      // Custom plugin to render percentage inside the chart
      beforeDraw: function(chart) {
        const { width, height, ctx } = chart;
        ctx.restore();
        const fontSize = (height / 100).toFixed(2);
        ctx.font = `${fontSize}em sans-serif`;
        ctx.textBaseline = 'middle';

        const text = `${data.datasets[0].data[0]}%`, // Percentage text for "Completed"
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;

        ctx.fillStyle = '#fff'; // Text color
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  };

  return (
    <div className="w-[250px]">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default CoursesCompletedChart;
