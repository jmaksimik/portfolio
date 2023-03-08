import React from 'react';

export default function ProjectCard({project}) {
    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg hover:scale-110 transform transition duration-500'>
            <img className='w-full' src={project.imageSource} alt={project.title} />
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{project.title}</div>
                <p className='text-gray-700 text-base'>
                    {project.description}
                </p>
                <br></br>
                <a className='text-blue-600 hover:text-black' href={project.githubLink}>GitHub Link</a>
                <br></br>
                <a className='text-blue-600 hover:text-black' href={project.deployedLink}>Deployed Link</a>
            </div>
        </div>
    )
}