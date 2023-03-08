import React from "react";

import PortfolioPic from "../PortfolioPic/PortfolioPic";

export default function AboutMe() {
    return (
        <div className='container max-w-full bg-slate-200 drop-shadow-sm py-10'>
            <h2 className='text-center text-3xl font-thin'>About Me</h2>
            <div className='flex flex-row flex-wrap justify-center mt-10 ml-10 gap-20'>
                <p className='text-left inline-block w-96 mt-10 font-thin text-lg '>I'm John Maksimik, a full-stack software developer who loves solving complex business problems. 
                I thrive on challenges and the rush of excitement I feel when the solution inevitably comes. 
                <br></br><br></br>
                I discovered coding midway through my 20s 
                and fell in love with it, so much so, that I realized software development was the right career path where I can thrive on seeing the work I put in come to fruition.
                </p>
                <PortfolioPic />
            </div>
        </div>
    )
}