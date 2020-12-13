import React from 'react';
import myResume from '../../assets/images/resume.pdf';

function Resume() {
    return (
        <div className="flex-container">
            <div className="flex-row">
                <a href={myResume} target="blank">My Resume</a>
            </div>
        </div>
    );
}

export default Resume;