import React from 'react';

import MainBanner from '../../components/MainBanner/MainBanner';
import AboutMe from '../../components/AboutMe/AboutMe';
import Projects from '../../components/ProjectList/ProjectList';
import LanguageImages from '../../components/LanguageImages/LanguageImages';

export default function LandingPage() {
    return (
        <>
            <MainBanner />
            <AboutMe />
            <LanguageImages />
            <Projects />

        </>
    )
    
}