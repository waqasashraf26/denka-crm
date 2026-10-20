'use client'
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register the required components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const BreakDownChart = () => {
    // Data for the donut chart
    const data = {
        labels: ['Website', 'Referrals', 'Ads'],
        datasets: [
            {
                label: 'My Dataset',
                data: [30, 40, 30], // Sample data values
                backgroundColor: ['#FFB38E', '#FF8E8F', '#E178C5',], // Custom colors
                borderColor: ['#FFB38E', '#FF8E8F', '#E178C5',],
                borderWidth: 0.1,
            },
        ],
    };

    // Options for the donut chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',

                labels: {
                    pointStyle: 'circle', // Use 'circle' for circular dots
                    usePointStyle: true, // Ensure that pointStyle is applied
                    generateLabels: (chart) => {
                        // Generate custom labels to match dataset colors
                        const data = chart.data;
                        return data.datasets[0].backgroundColor.map((color, index) => ({
                            text: data.labels[index],
                            fillStyle: color,
                            strokeStyle: color,
                            pointStyle: 'circle',
                            lineWidth: 2,
                        }));
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%'; // Format tooltip
                    },
                },
            },
        },
        elements: {
            arc: {
                borderWidth: 0, // Optional: remove border if not needed
            },
        },
        cutout: '80%', // Adjust this value to make the donut thinner or thicker

    };

    return (
        <div className='flex flex-col lg:items-start items-center justify-between w-full shadow-md h-full p-4 rounded-lg border border-borderGray '>
            <div className='w-full mb-4'>
                <h2 className='font-bold xl:text-xl text-start text-lg'>Lead Source Breakdown</h2>
            </div>
            <div className='flex justify-center w-full h-full   items-center'>
                <div className='xl:w-[80%] lg:w-full sm:w-[70%] w-[90%] relative'>
                    <div className='text-center absolute top-1/2 left-1/2 transform pb-4 -translate-x-1/2 -translate-y-1/2'>
                        <h1 className='font-bold xl:text-xl text-lg'>Lead Source </h1>
                        <p className='xl:text-sm text-xs font-bold'>Breakdown</p>
                    </div>
                    {/* <div className='w-full lg:h-full md:h-[400px] flex justify-center'> */}
                        <Doughnut data={data} options={options} />
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default BreakDownChart;
