import React from "react";

import NavBar from "../NavBar/NavBar";

export default function MainBanner({isLandingPage}) {
    return (
        <>
            <div className='flex text-white flex-col justify-center items-center container main-banner max-w-full'>
                <NavBar isLandingPage={isLandingPage} />
                <p className='text-center text-5xl text-white font-apple'>
                    Hi, I'm John
                </p>
                <div className='type-container'>
                    <p className='text-center text-3xl text-white mt-3 mb-5 typed'>
                        Lover of all things tech
                    </p>
                </div>
                <div className='flex flex-row align-items-center'>
                    <a className='mr-4'
                        href='https://github.com/jmaksimik'
                        target='_blank'>
                        <img src='src/assets/images/github-icon.png' alt='Github' />
                    </a>
                    <a className='mr-4'
                        href='https://linkedin.com/in/jmaksimik'
                        target='_blank'>
                        <img src='src/assets/images/linkedin-icon.png' alt='LinkedIn' style={{ width: 64, height: 64 }} />
                    </a>
                </div>
            </div>
        </>

    )
}