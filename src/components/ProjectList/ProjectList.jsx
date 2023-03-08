import React from 'react';

import ProjectCard from '../ProjectCard/ProjectCard';

export default function ProjectList() {
    const projectList = [
        {
            title: 'Newsie',
            technologies: 'JS, React, MongoDB, Node.js, Express, Mongoose, CSS, HTML5',
            imageSource: '/Newsie.png',
            description: 'RESTful API news aggregation site built as a single-page React app. Users can customize tags and bookmark specific articles for later reading.',
            githubLink: 'https://github.com/jmaksimik/newsie',
            deployedLink: 'https://newsie.cyclic.app'
        },
        {
            title: 'TunedIn',
            technologies: 'JS, MongoDB, Node.js, Express, Mongoose, CSS, HTML5',
            imageSource: '/TunedIn.png',
            description: 'MongoDB app where players can create and save playlists and songs. They can also view submissions from other users. Google OAuth login functionality.',
            githubLink: 'https://github.com/jmaksimik/tunedIn',
            deployedLink: 'https://gold-outstanding-octopus.cyclic.app'
        },
        {
            title: 'Pursuit of HealthYNess',
            technologies: 'Python, Django, HTML5, CSS, JS, AWS(S3)',
            imageSource: '/PoH.png',
            description: 'Django-based EHR platform where users can upload medical files, add and track prescriptions and appointments, and much more. Worked on in conjunction with three other developers due to the sheer scope of the project.',
            githubLink: 'https://github.com/jmaksimik/PoH',
            deployedLink: 'https://snowy-sky-6053.fly.dev/'
        },
        {
            title: 'My Portfolio',
            technologies: 'HTML5, Tailwind CSS, CSS, JS, React.js',
            imageSource: '/Portfolio.PNG',
            description: 'The source code for my portfolio, built from scratch in React. I experimented with several dependencies, including Tailwind, React-pdf, and @headlessui.',
            githubLink: 'https://github.com/jmaksimik/portfolio',
            deployedLink: ''
        }
    ]

    return (
        <>
            <div className='container max-w-full py-10 drop-shadow-sm' id='Projects'>
                <p className='text-center text-3xl font-thin'>My Projects</p>
                <div className='flex flex-row justify-center mt-10 gap-12 flex-wrap'>
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