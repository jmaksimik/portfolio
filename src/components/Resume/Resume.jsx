import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'standard_fonts/',
};


export default function Resume(props) {
    const [file, setFile] = useState('../../src/assets/jm-resume.pdf')
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({numPages: nextNumPages}){
        setNumPages(nextNumPages);
    }


    return (
        <div className='container mx-w-full mt-32 flex flex-col content-center'>
            <p className='text-3xl'>Resume</p>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
                {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
            </Document>
        </div>


    )
}