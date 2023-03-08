import React from "react";

import PortfolioPic from "../PortfolioPic/PortfolioPic";
import LanguageImages from "../SkillImages/SkillImages";

export default function AboutMe() {
    return (
        <div className='container max-w-full bg-slate-200 drop-shadow-sm py-10 '>
            <h2 className='text-center text-3xl'>About Me</h2>
            <div className='flex flex-row flex-wrap justify-center mt-10 ml-10'>
                <p className='text-right'>Picture of me</p>
                <PortfolioPic />
            </div>
        </div>
    )
}