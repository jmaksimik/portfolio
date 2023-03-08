import React from "react";

const languageList = [
    { source: './CSS.png', description: 'CSS' },
    { source: './JS.png', description: 'JS' },
    { source: './Python.png', description: 'Python' },
    { source: './Node.png', description: 'Node.js' },
    { source: './React.png', description: 'React' }

]

export default function SkillImages() {
    return (
        <div className='container max-w-full drop-shadow-sm py-10 bg-slate-100' id='Skills'>
            <p className='text-center text-3xl font-thin'>Skills</p>
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
