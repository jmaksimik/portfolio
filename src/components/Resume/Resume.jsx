import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'standard_fonts/',
};


export default function Resume({props}) {
    const [file, setFile] = useState('./jm-resume.pdf')
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }


    return (
        <div className='container mx-auto mt-10 flex flex-col items-center justify-center m-10'>
            <p className='text-3xl text-center'>Resume</p>
            <a href='https://drive.google.com/uc?id=1PDCZfCKEaLyZZuicSHzy6GKbIldM3PQ9&export=download' download='john-maksimik-resume'>
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-5 mb-5">
                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                    <span>Download</span>
                </button>
            </a>
            <div className='resume'>
                <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={1.2} />
                    ))}
                </Document>
            </div>

        </div>


    )
}