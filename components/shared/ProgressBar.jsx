'use client'

import React, { useEffect, useState } from 'react';

const ProgressBar = ({ progress, bgColor }) => {

    const [currentProgress, setCurrentProgress] = useState(0); // Start from 0

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentProgress((prevProgress) => {
                const nextProgress = Math.min(prevProgress + 1, progress);
                return nextProgress;
            });
        }, 0); // Adjust the speed of the animation by changing the interval time

        return () => clearInterval(timer);
    }, [progress]);

    

    return (
        <>
            <div className='text-[11px] w-full flex items-center justify-between gap-2 leading-3'>
                <p>Progress</p>
                <p>{currentProgress}%</p>
            </div>
            <div className="w-full bg-[#D9D9D92B]  h-4 overflow-hidden">
                <div
                    className=" h-full  transition-all duration-300"
                    style={{ width: `${currentProgress}%`, backgroundColor: `${bgColor}` }}
                />
            </div>
        </>
    );
};

export default ProgressBar;
