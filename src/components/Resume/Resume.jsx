import React, {useState} from 'react';
import {Document, Page} from 'react-pdf/dist/esm/entry.vite';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

export default function Resume(props) {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    const { pdf } = props;

    return (
            <Document
                file={pdf}
                onLoadSuccess = {onDocumentLoadSuccess}
            >
             </Document>

    )
}