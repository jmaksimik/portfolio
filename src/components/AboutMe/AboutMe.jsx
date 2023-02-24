import React from "react";

import PortfolioPic from "../PortfolioPic/PortfolioPic";
import LanguageImages from "../LanguageImages/LanguageImages";

export default function AboutMe() {
    return (
        <div className='container mx-auto'>
            <h2 className='text-center'>About Me</h2>
            <div className='columns-2'>
                <p className='text-right'>Picture of me</p>
                <PortfolioPic />
            </div>
            <LanguageImages />
        </div>
    )
}