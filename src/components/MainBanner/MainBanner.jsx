import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import NavBar from "../NavBar/NavBar";

export default function MainBanner({ isMainBanner }) {
    return (
        <>
            <div className='flex text-white flex-col justify-center items-center container main-banner max-w-full drop-shadow-xl'>
                <NavBar isMainBanner={isMainBanner} />
                <p className='text-center text-5xl text-white'>
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
                        <FontAwesomeIcon icon={faGithub} size='4x'/>
                    </a>
                    <a className='mr-4'
                        href='https://linkedin.com/in/jmaksimik'
                        target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} size='4x' />
                    </a>
                </div>
            </div>
        </>

    )
}