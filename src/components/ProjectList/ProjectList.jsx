import React from 'react';

import ProjectCard from '../ProjectCard/ProjectCard';

export default function ProjectList() {
    const projectList = [
        {
            title: 'Newsie',
            technologies: 'JS, React, MongoDB, Node.js, Express, Mongoose, CSS, HTML5',
            imageSource: 'src/assets/images/Newsie.png',
            description: 'RESTful API news aggregation site built as a single-page React app. Users can customize tags and bookmark specific articles for later reading.',
            githubLink: 'https://github.com/jmaksimik/newsie',
            deployedLink: 'https://newsie.cyclic.app'
        },
        {
            title: 'TunedIn',
            technologies: 'JS, MongoDB, Node.js, Express, Mongoose, CSS, HTML5',
            imageSource: 'src/assets/images/TunedIn.png',
            description: 'MongoDB app where players can create and save playlists and songs. They can also view submissions from other users. Google OAuth login functionality.',
            githubLink: 'https://github.com/jmaksimik/tunedIn',
            deployedLink: 'https://gold-outstanding-octopus.cyclic.app'
        },
        {
            title: 'Pursuit of HealthYNess',
            technologies: 'Python, Django, HTML5, CSS, JS, AWS(S3)',
            imageSource: 'src/assets/images/PoH.png',
            description: 'Django-based EHR where users can upload medical files, add and track prescriptions and appointments, and much more. Worked on in conjunction with three other developers due to the sheer scope of the project.',
            githubLink: 'https://github.com/jmaksimik/PoH',
            deployedLink: 'https://snowy-sky-6053.fly.dev/'
        }
    ]

    return (
        <>
            <div className='container max-w-full mt-10 bg-slate-100 drop-shadow-sm'>
                <p className='text-center text-3xl font-bold underline'>My Projects</p>
                <div className='flex flex-row justify-center mt-5 gap-12'>
                    {projectList.map((project, index) => {
                        return (
                            <ProjectCard
                                project={project}
                                key={index}
                            />
                        )
                    })}
                </div>
            </div>

        </>

    )
}