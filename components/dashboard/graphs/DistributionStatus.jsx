'use client'
import React from 'react';
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

// Register components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const DistributionStatus = () => {
    const data = {
        labels: ['New', 'Contacted', 'Qualified'],
        datasets: [
            {
                label: 'Leads Distribution',
                data: [30, 90, 100],
                backgroundColor: [
                    '#FFBA86',
                    '#F6635C',
                    '#79155B'
                ],
                borderColor: [
                    '#FFBA86',
                    '#F6635C',
                    '#79155B'
                ],
                borderWidth: 1,
                borderRadius: 5,
                barPercentage: 0.6, // Adjust the thickness of the bars
                categoryPercentage: 0.6, // Adjust the spacing between bars
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100, // Set the maximum value of y-axis to 100
                ticks: {
                    stepSize: 20, // Increment by 20
                    callback: function (value) {
                        return value.toString(); // Format y-axis labels
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
        <div className="p-4 bg-white rounded-lg shadow-md w-full border border-borderGray ">
            <div className='flex w-full flex-wrap justify-between items-center'>
                <h2 className="xl:text-xl text-lg font-bold mb-4">Leads Distribution by status</h2>
                <div className='flex items-center justify-end gap-4 border border-borderGray bg-[#FAFBFB] outline-none rounded-lg p-2'>
                    <button className="bg-white px-6 py-0.5 rounded-md">B2B</button>
                    <button className="px-6 py-0.5 rounded-md">B2C</button>
                </div>
            </div>

            <div className="w-full sm:h-[300px] h-[200px]"> {/* Adjust height */}
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default DistributionStatus;
