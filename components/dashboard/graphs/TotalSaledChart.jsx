'use client'
import calender from '@/public/assets/icons/calenderIcon.svg'
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler, // Import Filler to enable filling the area between datasets
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Image from 'next/image';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler, // Register Filler plugin
  Title,
  Tooltip,
  Legend
);

const TotalSalesChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [13000, 13500, 12300, 13800, 14000, 12789, 14300, 12600, 13700, 12500, 13400, 12800],  // Adjusted values to be between 11k and 14k
        fill: false, // Fill area between this dataset and the previous one
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Area color for 'Revenue' background: ;
        borderColor: '#E178C5', // Line color for 'Revenue'
        borderWidth: 2,
        tension: 0, // Smooth line
        pointRadius: 0, // Remove points
        pointHoverRadius: 5, // Show points when hovered
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Order',
        data: [11300, 12000, 13000, 12500, 13200, 11900, 13500, 12000, 12300, 14000, 11500, 13900],  // Adjusted values to be between 11k and 14k
        fill: '-1', // Fill area between this dataset and the x-axis
        backgroundColor: 'rgba(255, 159, 64, 0.2)', // Area color for 'Order'
        borderColor: '#FF8E8F', // Line color for 'Order'
        borderWidth: 2,
        tension: 0, // Smooth line
        pointRadius: 0, // Remove points
        pointHoverRadius: 5, // Show points when hovered
        pointBackgroundColor: 'rgba(255, 159, 64, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        mode: 'nearest', // Show tooltip on hover over line
        intersect: false, // Allows hovering over the line, not just points
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 11000,
        max: 19000,
        ticks: {
          callback: function (value) {
            return `$${(value / 1000).toFixed(0)}k`;
          },
        },
      },
    },

  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full border border-borderGray ">
      <div className='flex w-full justify-between items-center'>
        <h2 className="xl:text-xl text-lg font-bold mb-4">Total Sales</h2>
        <div className='flex items-center gap-1 border border-borderGray outline-none rounded-lg p-2'>
          <Image alt='' src={calender} className='w-5' />
          <select name="" id="" className='text-gray'>
            <option value="">Monthly</option>
            <option value="january">Jan</option>
            <option value="february">Feb</option>
            <option value="march">Mar</option>
            <option value="april">Apr</option>
          </select>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default TotalSalesChart;
