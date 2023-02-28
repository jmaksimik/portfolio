import React from "react";

import NavBar from "../NavBar/NavBar";

export default function MainBanner() {
    return (
        <>
            <div className='flex text-white flex-col justify-center items-center container main-banner max-w-full'>
                <NavBar />
                    <p className='text-center text-5xl text-white'>
                    Hi, I'm John
                    </p>
                    <div className='type-container'>
                        <p className='text-center text-3xl text-white mt-3 mb-5 typed'>
                            Lover of all things tech
                        </p>
                    </div>

                <a className='mr-4' 
                        href='https://github.com/jmaksimik' target='_blank'>
                            <img src='src/assets/images/github-icon.png' alt='Github' />
                </a>                
            </div>
        </>

    )
}