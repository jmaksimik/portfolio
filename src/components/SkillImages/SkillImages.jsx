import React from "react";

const languageList = [
    { source: 'https://imgur.com/rsjpmI4.png', description: 'CSS' },
    { source: 'https://imgur.com/DQ1LIJa.png', description: 'JS' },
    { source: 'https://imgur.com/4r02gPS.png', description: 'Python' },
    { source: 'https://imgur.com/98O11zd.png', description: 'Node.js' },
    { source: 'https://imgur.com/AaPvUNg.png', description: 'React' }

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
