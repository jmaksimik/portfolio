import React from 'react';

import MainBanner from '../../components/MainBanner/MainBanner';
import AboutMe from '../../components/AboutMe/AboutMe';
import Projects from '../../components/ProjectList/ProjectList';
import SkillImages from '../../components/SkillImages/SkillImages';
import Contact from '../../components/Contact/Contact';

export default function LandingPage({isMainBanner, handleMainBanner}) {
    return (
        <>
            <MainBanner isMainBanner={isMainBanner} handleMainBanner={handleMainBanner} />
            <AboutMe />
            <SkillImages />
            <Projects />
            <Contact />

        </>
    )
    
}