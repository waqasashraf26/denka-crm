'use client'
import React from 'react';
import calender from '@/public/assets/icons/calenderIcon.svg';
import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
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
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const KpiChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                type: 'bar',  // Bar chart for 2024 data
                label: '2024',
                data: [150, 60, 240, 30, 120, 210, 40, 10, 20, 90, 50, 70],
                backgroundColor: 'rgba(255, 99, 132, 0.4)', // Light red
                borderColor: 'rgba(255, 99, 132, 1)', // Darker red for borders
                borderWidth: 2,
                borderRadius: 4,
                barPercentage: 0.5, // Adjust the width of the bars
                categoryPercentage: 0.8, // Adjust space between bars
            },
            {
                type: 'line',  // Line chart for 2022 data
                label: '2022',
                data: [120, 150, 60, 90, 140, 50, 100, 30, 110, 70, 30, 40],
                borderColor: 'blue', // Line color
                borderWidth: 2,
                tension: 0.4, // Smooth line
                pointBackgroundColor: 'blue', // Point color
                pointRadius: 4, // Size of the points
            }
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true, 
                ticks: {
                    stepSize: 30, 
                    callback: function (value) {
                        return value; 
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
                display: true,
                position: 'bottom',
            },
            tooltip: {
                mode: 'index',
                intersect: false
            }
        },
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md w-full h-full border border-borderGray ">
            <h2 className="xl:text-2xl text-xl font-bold mb-4">KPI Achievement</h2>

            <div className="w-full sm:h-[300px] h-[200px]">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default KpiChart;
