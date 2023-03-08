import React from "react";

const languageList = [
    { source: 'src/assets/images/CSS.png', description: 'CSS' },
    { source: 'src/assets/images/JS.png', description: 'JS' },
    { source: 'src/assets/images/Python.png', description: 'Python' },
    { source: 'src/assets/images/Node.png', description: 'Node.js' },
    { source: 'src/assets/images/React.png', description: 'React' }

]

export default function SkillImages() {
    return (
        <div className='container max-w-full drop-shadow-sm py-10 bg-slate-100'>
            <p className='text-center text-3xl'>Skills</p>
            <div className='flex flex-row justify-center gap-20 mt-10 flex-wrap'>
                {languageList.map((language, index) => {
                    return (
                        <img src={language.source} alt={language.description} className='language-icons' key={index} />
                    )
                }
                )}
            </div>
        </div>

    )
}