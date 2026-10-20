'use client'
// StripedBarChart.jsx
import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PipelineChart = () => {
    const data = {
        labels: ['New', 'In Progress', 'Pro Sent', 'Negotiation', 'Closed (won)', 'Closed (Lost)'],
        datasets: [
            {
                label: '2022',
                data: [70, 65, 20, 85, 50, 70],
                backgroundColor: '#6c63ff', // Solid color initially
                borderWidth: 1,
                borderColor: '#6c63ff',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
            },
        },
        animation: false, // Disable animation to avoid flickering
    };

    useEffect(() => {
        const chartInstance = ChartJS.getChart('striped-bar-chart'); // Get the chart instance

        if (chartInstance) {
            const ctx = chartInstance.ctx;
            chartInstance.data.datasets.forEach((dataset, i) => {
                const meta = chartInstance.getDatasetMeta(i);
                meta.data.forEach((bar) => {
                    // Create a custom stripe pattern for each bar
                    const patternCanvas = document.createElement('canvas');
                    patternCanvas.width = 10;
                    patternCanvas.height = 10;
                    const pctx = patternCanvas.getContext('2d');

                    // Draw horizontal lines for the stripes
                    pctx.strokeStyle = dataset.backgroundColor;
                    pctx.lineWidth = 1;
                    for (let y = 2; y < patternCanvas.height; y += 4) {
                        pctx.beginPath();
                        pctx.moveTo(0, y);
                        pctx.lineTo(patternCanvas.width, y);
                        pctx.stroke();
                    }

                    // Add a bold line at the bottom of the pattern
                    pctx.lineWidth = 3;
                    pctx.beginPath();
                    pctx.moveTo(0, patternCanvas.height - 1);
                    pctx.lineTo(patternCanvas.width, patternCanvas.height - 1);
                    pctx.stroke();

                    const pattern = ctx.createPattern(patternCanvas, 'repeat');

                    // Set the custom pattern as the background
                    bar.draw = function () {
                        ctx.save();
                        ctx.fillStyle = pattern;
                        ctx.fillRect(bar.x - bar.width / 2, bar.y, bar.width, bar.base - bar.y);
                        ctx.restore();
                    };
                });
            });
        }
    }, []);

    return (
        <div className="border border-borderGray p-3 mt-2 bg-white rounded-lg shadow-md  h-full w-full max-w-5xl mx-auto">
            <Bar id="striped-bar-chart" data={data} options={options} />
        </div>
    );
};

export default PipelineChart;
