import React from "react";

import PortfolioPic from "../PortfolioPic/PortfolioPic";
import LanguageImages from "../LanguageImages/LanguageImages";

export default function AboutMe() {
    return (
        <div className='container max-w-full bg-slate-100 drop-shadow-sm py-10 '>
            <h2 className='text-center text-3xl'>About Me</h2>
            <div className='columns-2'>
                <p className='text-right'>Picture of me</p>
                <PortfolioPic />
            </div>
        </div>
    )
}