'use client'
import React from 'react';
import calender from '@/public/assets/icons/calenderIcon.svg';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import Image from 'next/image';

// Register components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const SalesChart = () => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Sales',
                data: [12000, 14000, 13500, 16000, 15500, 16500, 10000],
                backgroundColor: 'rgba(99, 102, 241, 0.6)',
                borderColor: 'rgba(99, 102, 241, 1)',
                borderWidth: 2,
                borderRadius: 5,
                barPercentage: 0.8, // Adjust this for the bar thickness
                categoryPercentage: 0.8, // Adjust this for the space between bars
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Disable maintaining aspect ratio
        scales: {
            y: {
                beginAtZero: false, // Start y-axis from a specific value
                min: 10000, // Minimum value of y-axis
                max: 17000, // Maximum value of y-axis
                ticks: {
                    stepSize: 1000, // Increment by 1k
                    autoSkip: false, // Ensure all labels are shown
                    callback: function (value) {
                        return '$' + value.toLocaleString(); // Format y-axis labels
                    },
                },
                grid: {
                    borderDash: [8, 4],
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md w-full h-full border border-borderGray ">
            <div className='flex w-full h-full justify-between items-center'>
                <h2 className="xl:text-xl text-lg font-bold mb-4">Sales trends over time</h2>
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

            <div className="w-full sm:h-[300px] h-[200px]"> 
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default SalesChart;
