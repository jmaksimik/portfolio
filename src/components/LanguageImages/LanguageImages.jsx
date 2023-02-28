import React from "react";

const languageList = [
    {source: 'src/assets/images/CSS.png', description: 'CSS'},
    {source: 'src/assets/images/JS.png', description: 'JS'},
    {source: 'src/assets/images/Python.png', description: 'Python' },
    {source: 'src/assets/images/Node.png', description: 'Node.js'},
    {source: 'src/assets/images/React.png', description: 'React' }

]

export default function LanguageImages(){
    return (
        <div className='flex-row columns-5 mt-10'>
            {languageList.map((language, index) => {
                return (
                    <img src={language.source} alt={language.description} className='language-icons' key={index} />
                )
            }
        )}
        </div>

        // <div className='flex-row columns-6 mt-10'>
        //     <img src='src/assets/images/CSS.png' alt='CSS' />
        //     <img src='src/assets/images/JS.png' alt='JS'/>
        //     <img src='src/assets/images/MongoDB.jpg' alt='MongoDB' />
        //     <img src='src/assets/images/Python.png' alt='Python' />
        //     <img src='src/assets/images/Node.png' alt='Node.js' />
        //     <img src ='src/assets/images/React.png' alt='React' />
        // </div>
    )
}