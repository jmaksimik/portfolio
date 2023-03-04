import React from 'react';

import MainBanner from '../../components/MainBanner/MainBanner';
import AboutMe from '../../components/AboutMe/AboutMe';
import Projects from '../../components/ProjectList/ProjectList';
import LanguageImages from '../../components/LanguageImages/LanguageImages';

export default function LandingPage({isLandingPage, handleLandingPage}) {
    return (
        <>
            <MainBanner isLandingPage={isLandingPage} handleLandingPage={handleLandingPage} />
            <AboutMe />
            <LanguageImages />
            <Projects />

        </>
    )
    
}