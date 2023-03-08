import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Resume from "../../components/Resume/Resume";

import jmResume from '/jm-resume.pdf';

export default function ResumePage() {
    return (
        <div>
            <NavBar />
            <Resume pdf={jmResume} />
        </div>
    )
}